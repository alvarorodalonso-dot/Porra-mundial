"use client";

import type { BoletoPuntuado } from "@/lib/types";

interface Props {
  ranking: BoletoPuntuado[];
  onSeleccionar: (id: string) => void;
}

const MEDALLAS = ["🥇", "🥈", "🥉"];

export default function Ranking({ ranking, onSeleccionar }: Props) {
  const lider = ranking[0]?.total ?? 0;

  return (
    <ol className="flex flex-col gap-3">
      {ranking.map((p, i) => {
        const distancia = lider - p.total;
        const podio = i < 3;
        return (
          <li key={p.boleto.id}>
            <button
              onClick={() => onSeleccionar(p.boleto.id)}
              className={`group w-full text-left rounded-2xl border transition-all duration-200
                ${
                  podio
                    ? "border-esmeralda-600/40 bg-gradient-to-br from-pizarra-800 to-pizarra-850 shadow-glow-sm"
                    : "border-pizarra-700/60 bg-pizarra-850/60 hover:border-esmeralda-600/40"
                }
                hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-esmeralda-500/50`}
            >
              <div className="flex items-center gap-4 p-4">
                {/* Posición */}
                <div className="flex w-10 shrink-0 flex-col items-center">
                  <span className="text-xl leading-none">
                    {podio ? MEDALLAS[i] : ""}
                  </span>
                  <span
                    className={`tabular text-sm font-bold ${
                      podio ? "text-esmeralda-400" : "text-pizarra-500"
                    }`}
                  >
                    {i + 1}º
                  </span>
                </div>

                {/* Nombre y desglose */}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-emerald-50">
                    {p.boleto.nombre}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-pizarra-500">
                    <span title="Puntos de quiniela">
                      🎯 {p.puntosQuiniela}{" "}
                      <span className="text-pizarra-500/70">
                        ({p.aciertosQuiniela}/36)
                      </span>
                    </span>
                    <span title="Puntos por selecciones">🌍 {p.puntosEquipos}</span>
                    <span title="Campeón">
                      🏆{" "}
                      {p.campeonAcertado === true
                        ? "✓"
                        : p.campeonAcertado === false
                        ? "✗"
                        : p.boleto.campeon}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex shrink-0 flex-col items-end">
                  <span className="tabular text-2xl font-bold text-esmeralda-400">
                    {p.total}
                  </span>
                  {i === 0 ? (
                    <span className="text-[11px] font-medium text-ambar">
                      Líder
                    </span>
                  ) : distancia === 0 ? (
                    <span className="text-[11px] font-medium text-pizarra-500">
                      Empate
                    </span>
                  ) : (
                    <span className="tabular text-[11px] text-pizarra-500">
                      −{distancia}
                    </span>
                  )}
                </div>

                <span className="text-pizarra-600 transition-transform group-hover:translate-x-1 group-hover:text-esmeralda-400">
                  ›
                </span>
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
