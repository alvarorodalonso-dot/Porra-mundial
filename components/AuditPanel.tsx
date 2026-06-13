"use client";

import { useEffect } from "react";
import type { BoletoPuntuado } from "@/lib/types";
import { ETIQUETA_RONDA, PUNTOS_INCREMENTO_RONDA } from "@/lib/scoring";

interface Props {
  datos: BoletoPuntuado | null;
  onCerrar: () => void;
}

export default function AuditPanel({ datos, onCerrar }: Props) {
  // Cerrar con Escape.
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onCerrar();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onCerrar]);

  if (!datos) return null;
  const p = datos;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCerrar}
      />

      {/* Panel */}
      <div className="relative h-full w-full max-w-xl animate-slide-in overflow-y-auto border-l border-pizarra-700 bg-pizarra-900 shadow-2xl">
        {/* Cabecera */}
        <div className="sticky top-0 z-10 border-b border-pizarra-700 bg-pizarra-900/95 px-5 py-4 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-esmeralda-500">
                Auditoría del boleto
              </p>
              <h2 className="truncate text-lg font-bold text-emerald-50">
                {p.boleto.nombre}
              </h2>
            </div>
            <button
              onClick={onCerrar}
              className="shrink-0 rounded-lg border border-pizarra-700 px-3 py-1.5 text-sm text-pizarra-500 transition-colors hover:border-pizarra-600 hover:text-emerald-50"
            >
              Cerrar ✕
            </button>
          </div>

          {/* Resumen de puntos */}
          <div className="mt-3 grid grid-cols-4 gap-2 text-center">
            <Resumen etiqueta="Quiniela" valor={p.puntosQuiniela} />
            <Resumen etiqueta="Equipos" valor={p.puntosEquipos} />
            <Resumen etiqueta="Campeón" valor={p.puntosCampeon} />
            <Resumen etiqueta="TOTAL" valor={p.total} destacado />
          </div>
        </div>

        <div className="space-y-7 px-5 py-6">
          {/* Campeón */}
          <section>
            <SeccionTitulo
              icono="🏆"
              titulo="Campeón"
              extra={`+${p.puntosCampeon} pts`}
            />
            <div
              className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                p.campeonAcertado === true
                  ? "border-acierto/40 bg-acierto/10"
                  : p.campeonAcertado === false
                  ? "border-fallo/40 bg-fallo/10"
                  : "border-pizarra-700 bg-pizarra-850"
              }`}
            >
              <span
                className={`font-semibold ${
                  p.campeonAcertado === false
                    ? "text-fallo line-through"
                    : "text-emerald-50"
                }`}
              >
                {p.boleto.campeon}
              </span>
              <span className="text-sm">
                {p.campeonAcertado === true
                  ? "✓ Acertado"
                  : p.campeonAcertado === false
                  ? "✗ Fallado"
                  : "Pendiente"}
              </span>
            </div>
          </section>

          {/* Selecciones */}
          <section>
            <SeccionTitulo
              icono="🌍"
              titulo="Selecciones"
              extra={`${p.puntosEquipos} pts`}
            />
            <ul className="space-y-1.5">
              {p.detalleEquipos.map((e) => (
                <li
                  key={e.equipo}
                  className="flex items-center justify-between rounded-lg border border-pizarra-700/60 bg-pizarra-850/50 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        e.vivo ? "bg-acierto animate-pulse-live" : "bg-pizarra-600"
                      }`}
                      title={e.vivo ? "Sigue en competición" : "Eliminado"}
                    />
                    <span className="font-medium text-emerald-50">
                      {e.equipo}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-pizarra-500">
                      {ETIQUETA_RONDA[e.rondaAlcanzada]}
                    </span>
                    <span
                      className={`tabular w-10 text-right text-sm font-bold ${
                        e.puntos > 0 ? "text-esmeralda-400" : "text-pizarra-600"
                      }`}
                    >
                      {e.puntos}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] text-pizarra-600">
              Acumulativo por ronda — 16avos +{PUNTOS_INCREMENTO_RONDA.dieciseisavos} ·
              Octavos +{PUNTOS_INCREMENTO_RONDA.octavos} · Cuartos +
              {PUNTOS_INCREMENTO_RONDA.cuartos} · Semis +
              {PUNTOS_INCREMENTO_RONDA.semifinales} · Final +
              {PUNTOS_INCREMENTO_RONDA.final}
            </p>
          </section>

          {/* Quiniela */}
          <section>
            <SeccionTitulo
              icono="🎯"
              titulo="Quiniela (36 partidos)"
              extra={`${p.aciertosQuiniela}/36 · ${p.puntosQuiniela} pts`}
            />
            <ul className="space-y-1">
              {p.detalleQuiniela.map((q) => {
                const real = q.resultadoReal;
                const sinResolver = real === null;
                return (
                  <li
                    key={q.indice}
                    className={`flex items-center gap-3 rounded-lg px-3 py-1.5 text-sm ${
                      sinResolver
                        ? "bg-pizarra-850/40"
                        : q.acierto
                        ? "bg-acierto/10"
                        : "bg-fallo/10"
                    }`}
                  >
                    <span className="tabular w-6 shrink-0 text-xs text-pizarra-600">
                      {q.indice + 1}
                    </span>

                    {/* Enfrentamiento */}
                    <span className="min-w-0 flex-1 truncate text-pizarra-500">
                      {q.partido
                        ? `${q.partido.local} – ${q.partido.visitante}`
                        : "—"}
                      {q.partido &&
                        q.partido.golesLocal !== null &&
                        q.partido.golesVisitante !== null && (
                          <span className="ml-1 tabular text-emerald-50/80">
                            {q.partido.golesLocal}-{q.partido.golesVisitante}
                          </span>
                        )}
                    </span>

                    {/* Pronóstico */}
                    <Signo
                      valor={q.prediccion}
                      tipo={
                        sinResolver
                          ? "neutro"
                          : q.acierto
                          ? "acierto"
                          : "fallo"
                      }
                    />

                    {/* Resultado real */}
                    <span className="text-pizarra-600">→</span>
                    <Signo
                      valor={real ?? "·"}
                      tipo={sinResolver ? "pendiente" : "real"}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function Resumen({
  etiqueta,
  valor,
  destacado,
}: {
  etiqueta: string;
  valor: number;
  destacado?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-2 py-2 ${
        destacado
          ? "border-esmeralda-600/50 bg-esmeralda-600/10"
          : "border-pizarra-700 bg-pizarra-850"
      }`}
    >
      <p className="text-[10px] uppercase tracking-wide text-pizarra-500">
        {etiqueta}
      </p>
      <p
        className={`tabular text-lg font-bold ${
          destacado ? "text-esmeralda-400" : "text-emerald-50"
        }`}
      >
        {valor}
      </p>
    </div>
  );
}

function SeccionTitulo({
  icono,
  titulo,
  extra,
}: {
  icono: string;
  titulo: string;
  extra: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-50">
        <span>{icono}</span>
        {titulo}
      </h3>
      <span className="tabular text-xs font-medium text-esmeralda-500">
        {extra}
      </span>
    </div>
  );
}

function Signo({
  valor,
  tipo,
}: {
  valor: string;
  tipo: "acierto" | "fallo" | "real" | "neutro" | "pendiente";
}) {
  const estilos: Record<typeof tipo, string> = {
    acierto: "bg-acierto/20 text-acierto border-acierto/40",
    fallo: "bg-fallo/20 text-fallo border-fallo/40 line-through",
    real: "bg-pizarra-700 text-emerald-50 border-pizarra-600",
    neutro: "bg-pizarra-800 text-pizarra-400 border-pizarra-700",
    pendiente: "bg-transparent text-pizarra-600 border-pizarra-700 border-dashed",
  };
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border text-xs font-bold ${estilos[tipo]}`}
    >
      {valor}
    </span>
  );
}
