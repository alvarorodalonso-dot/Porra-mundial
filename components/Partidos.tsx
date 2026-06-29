"use client";

import { useMemo } from "react";
import type { BoletoPuntuado, DatosTorneo, Partido, Signo, Boleto } from "@/lib/types";
import { ETIQUETA_RONDA } from "@/lib/scoring";
import { QUINIELA_OFICIAL } from "@/lib/quiniela";

interface Props {
  datos: DatosTorneo;
  ranking: BoletoPuntuado[];
}

/** Nombre corto para las columnas de pronóstico. */
function corto(id: string, nombre: string): string {
  const map: Record<string, string> = {
    alvaro_1: "Á1",
    alvaro_2: "Á2",
    martin_1: "MF",
  };
  return map[id] ?? nombre.split(" ")[0].slice(0, 3);
}

/** ¿Nombre de equipo aún sin definir (placeholder de eliminatoria)? */
function esPlaceholder(nombre: string): boolean {
  return /winner|loser|\bplace\b|round of|quarterfinal|semifinal|\bgroup\b|tbd|to be/i.test(
    nombre || ""
  );
}

function fechaCorta(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso.slice(0, 10);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
}

function horaCorta(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

interface Fila {
  num: number;
  fecha: string;
  local: string;
  visitante: string;
  grupo: string;
  partido: Partido | null;
}

export default function Partidos({ datos, ranking }: Props) {
  const boletos = ranking.map((r) => r.boleto);

  // Índice rápido: posición de quiniela -> partido real (si lo hay).
  const porIndice = useMemo(() => {
    const m = new Map<number, Partido>();
    for (const p of datos.partidos)
      if (p.indiceQuiniela !== null) m.set(p.indiceQuiniela, p);
    return m;
  }, [datos]);

  // Siempre los 36 partidos oficiales, con el resultado real superpuesto.
  const filas: Fila[] = useMemo(
    () =>
      QUINIELA_OFICIAL.map((of) => ({
        num: of.num,
        fecha: of.fecha,
        local: of.local,
        visitante: of.visitante,
        grupo: of.grupo,
        partido: porIndice.get(of.num - 1) ?? null,
      })),
    [porIndice]
  );

  const jugados = filas.filter((f) => f.partido?.signo != null).length;

  // Próximos partidos: oficiales sin resultado + eliminatorias programadas.
  const proximos = useMemo(() => {
    const pendientesQuiniela = filas
      .filter((f) => f.partido?.signo == null)
      .map((f) => ({
        clave: `q-${f.num}`,
        fecha: f.partido?.fecha || `${f.fecha}T18:00:00Z`,
        etiqueta: `Grupo ${f.grupo}`,
        local: f.local,
        visitante: f.visitante,
        enVivo: f.partido?.estado === "en_vivo",
      }));
    const eliminatorias = datos.partidos
      .filter(
        (p) =>
          p.indiceQuiniela === null &&
          p.estado !== "finalizado" &&
          // Solo llaves ya definidas (sin "Round of 32 X Winner", etc.).
          !esPlaceholder(p.local) &&
          !esPlaceholder(p.visitante)
      )
      .map((p) => ({
        clave: `k-${p.id}`,
        fecha: p.fecha,
        etiqueta: ETIQUETA_RONDA[p.ronda],
        local: p.local,
        visitante: p.visitante,
        enVivo: p.estado === "en_vivo",
      }));
    return [...pendientesQuiniela, ...eliminatorias]
      .sort((a, b) => (a.fecha < b.fecha ? -1 : 1))
      .slice(0, 8);
  }, [filas, datos]);

  return (
    <div className="space-y-8">
      {/* Próximos partidos */}
      {proximos.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-pizarra-500">
            Próximos partidos
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {proximos.map((p) => (
              <div
                key={p.clave}
                className="min-w-[190px] shrink-0 rounded-xl border border-pizarra-700/60 bg-pizarra-850/60 p-3"
              >
                <div className="flex items-center justify-between text-[11px] text-pizarra-500">
                  <span>{p.etiqueta}</span>
                  <span className="tabular">
                    {p.enVivo ? (
                      <span className="font-semibold text-acierto">● EN VIVO</span>
                    ) : (
                      `${fechaCorta(p.fecha)} ${horaCorta(p.fecha)}`
                    )}
                  </span>
                </div>
                <div className="mt-2 space-y-1 text-sm font-medium text-emerald-50">
                  <p>{p.local}</p>
                  <p className="text-pizarra-500">{p.visitante}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cotejo de la quiniela */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-pizarra-500">
            Quiniela · cotejo de resultados
          </h2>
          <span className="text-xs text-pizarra-600">{jugados}/36 jugados</span>
        </div>

        {/* Cabecera de columnas */}
        <div className="mb-2 flex items-center gap-2 px-3 text-[10px] uppercase tracking-wide text-pizarra-600">
          <span className="flex-1">Partido</span>
          <span className="w-7 text-center">Real</span>
          {boletos.map((b) => (
            <span key={b.id} className="w-9 text-center">
              {corto(b.id, b.nombre)}
            </span>
          ))}
        </div>

        <ul className="space-y-1">
          {filas.map((f) => (
            <FilaPartido key={f.num} fila={f} boletos={boletos} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function FilaPartido({ fila, boletos }: { fila: Fila; boletos: Boleto[] }) {
  const idx = fila.num - 1;
  const p = fila.partido;
  const real = p?.signo ?? null;
  const jugado = real !== null;
  const enVivo = p?.estado === "en_vivo";
  const marcador =
    p && p.golesLocal !== null && p.golesVisitante !== null
      ? `${p.golesLocal}-${p.golesVisitante}`
      : null;

  return (
    <li className="flex items-center gap-2 rounded-lg border border-pizarra-800 bg-pizarra-850/40 px-3 py-2">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[10px] text-pizarra-600">
          <span className="tabular">{fila.num}</span>
          <span>Grupo {fila.grupo}</span>
          <span className="tabular">{fechaCorta(fila.fecha)}</span>
          {enVivo && <span className="font-semibold text-acierto">● EN VIVO</span>}
        </div>
        <p className="truncate text-sm text-emerald-50">
          {fila.local} <span className="text-pizarra-600">–</span> {fila.visitante}
          {marcador && (
            <span className="ml-2 tabular font-semibold text-esmeralda-400">
              {marcador}
            </span>
          )}
        </p>
      </div>

      <Badge valor={real ?? "·"} tipo={jugado ? "real" : "pendiente"} />

      {boletos.map((b) => {
        const pick = b.quiniela[idx] as Signo;
        const tipo = !jugado ? "neutro" : pick === real ? "acierto" : "fallo";
        return (
          <div key={b.id} className="w-9 text-center">
            <Badge valor={pick} tipo={tipo} />
          </div>
        );
      })}
    </li>
  );
}

function Badge({
  valor,
  tipo,
}: {
  valor: string;
  tipo: "acierto" | "fallo" | "real" | "neutro" | "pendiente";
}) {
  const estilos: Record<typeof tipo, string> = {
    acierto: "bg-acierto/20 text-acierto border-acierto/40",
    fallo: "bg-fallo/15 text-fallo border-fallo/40 line-through",
    real: "bg-pizarra-700 text-emerald-50 border-pizarra-600",
    neutro: "bg-pizarra-800 text-pizarra-500 border-pizarra-700",
    pendiente: "bg-transparent text-pizarra-600 border-dashed border-pizarra-700",
  };
  return (
    <span
      className={`mx-auto flex h-6 w-6 items-center justify-center rounded border text-xs font-bold ${estilos[tipo]}`}
    >
      {valor}
    </span>
  );
}
