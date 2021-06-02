import { Spot } from "../models/spot";

export interface Travel {
  id_viagem?: number;
  nome_viagem: string;
  orcamento_viagem?: number | string;
  dt_inicio?: Date | string | number;
  dt_fim?: Date | string | number;
  descricao?: string;
  spots?: [Spot];
}

export const countSpots = (travel: Travel): number => {
  return travel.spots.length || 0;
};

export const countVisitedSpots = (travel: Travel) => {
  if (travel.spots) {
    return travel.spots.reduce(
      (acc: number, value: Spot) => acc + (value.visitado ? 1 : 0)
    , 0);
  }

  return 0;
};
