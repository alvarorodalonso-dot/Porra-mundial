"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { DatosTorneo } from "@/lib/types";
import { PARTICIPANTES } from "@/lib/participantes";
import { generarRanking } from "@/lib/scoring";
import Ranking from "@/components/Ranking";
import AuditPanel from "@/components/AuditPanel";
import Partidos from "@/components/Partidos";

type Vista = "ranking" | "partidos";

const INTERVALO_REFRESCO = 60_000; // 60 s

export default function Home() {
  const [datos, setDatos] = useState<DatosTorneo | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [vista, setVista] = useState<Vista>("ranking");

  const cargar = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch("/api/resultados", { cache: "no-store" });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const json: DatosTorneo = await res.json();
      setDatos(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
    const t = setInterval(cargar, INTERVALO_REFRESCO);
    return () => clearInterval(t);
  }, [cargar]);

  const ranking = useMemo(
    () => (datos ? generarRanking(PARTICIPANTES, datos) : []),
    [datos]
  );

  const boletoSeleccionado = useMemo(
    () => ranking.find((r) => r.boleto.id === seleccion) ?? null,
    [ranking, seleccion]
  );

  const horaActualizacion = datos
    ? new Date(datos.actualizado).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

  return (
    <main className="mx-auto min-h-dvh w-full max-w-2xl px-4 py-6 sm:py-10">
      {/* Cabecera */}
      <header className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-esmeralda-500">
              Auditor en vivo
            </p>
            <h1 className="mt-1 text-3xl font-black tracking-tight text-emerald-50 sm:text-4xl">
              Porra Mundial{" "}
              <span className="bg-gradient-to-r from-esmeralda-400 to-emerald-200 bg-clip-text text-transparent">
                2026
              </span>
            </h1>
          </div>
          <button
            onClick={cargar}
            className="shrink-0 rounded-xl border border-pizarra-700 bg-pizarra-850 px-3 py-2 text-sm text-pizarra-500 transition-colors hover:border-esmeralda-600/50 hover:text-esmeralda-400"
            title="Actualizar resultados"
          >
            ↻ Actualizar
          </button>
        </div>

        {/* Estado / fuente de datos */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
          {datos && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium ${
                datos.fuente === "api"
                  ? "bg-acierto/15 text-acierto"
                  : "bg-ambar/15 text-ambar"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-live" />
              {datos.fuente === "api"
                ? `Resultados reales · ${datos.proveedor ?? "API"}`
                : `Modo ${datos.proveedor ?? "demo"}`}
            </span>
          )}
          <span className="text-pizarra-500">
            Actualizado: <span className="tabular">{horaActualizacion}</span>
          </span>
          {datos?.campeon && (
            <span className="rounded-full bg-esmeralda-600/15 px-2.5 py-1 font-medium text-esmeralda-400">
              🏆 Campeón: {datos.campeon}
            </span>
          )}
        </div>
      </header>

      {/* Cuerpo */}
      {cargando && (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-20 animate-pulse rounded-2xl border border-pizarra-700/60 bg-pizarra-850/40"
            />
          ))}
        </div>
      )}

      {error && !datos && (
        <div className="rounded-2xl border border-fallo/40 bg-fallo/10 p-4 text-sm text-fallo">
          No se pudieron cargar los resultados: {error}
          <button
            onClick={cargar}
            className="ml-2 underline underline-offset-2"
          >
            Reintentar
          </button>
        </div>
      )}

      {!cargando && datos && (
        <>
          {/* Pestañas */}
          <div className="mb-5 inline-flex rounded-xl border border-pizarra-700 bg-pizarra-850/60 p-1">
            {(
              [
                ["ranking", "🏆 Ranking"],
                ["partidos", "📋 Partidos"],
              ] as [Vista, string][]
            ).map(([v, etiqueta]) => (
              <button
                key={v}
                onClick={() => setVista(v)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                  vista === v
                    ? "bg-esmeralda-600/20 text-esmeralda-400"
                    : "text-pizarra-500 hover:text-emerald-50"
                }`}
              >
                {etiqueta}
              </button>
            ))}
          </div>

          {vista === "ranking" ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-pizarra-500">
                  Ranking general
                </h2>
                <span className="text-xs text-pizarra-600">
                  {ranking.length} participantes · toca para auditar
                </span>
              </div>
              <Ranking ranking={ranking} onSeleccionar={setSeleccion} />
            </>
          ) : (
            <Partidos datos={datos} ranking={ranking} />
          )}
        </>
      )}

      {/* Pie con sistema de puntuación */}
      <footer className="mt-10 border-t border-pizarra-800 pt-5 text-[11px] leading-relaxed text-pizarra-600">
        <p className="font-medium text-pizarra-500">Sistema de puntuación</p>
        <p>
          Quiniela: +2 por acierto exacto (36 partidos de grupos) · Selecciones
          (acumulativo por ronda): 16avos +2, Octavos +4, Cuartos +8, Semis +15,
          Final +25 · Campeón: +40.
        </p>
      </footer>

      {/* Panel de auditoría */}
      <AuditPanel
        datos={boletoSeleccionado}
        onCerrar={() => setSeleccion(null)}
      />
    </main>
  );
}
