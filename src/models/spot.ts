export interface Spot {
  id_local?: number;
  nome_local: string;
  descricao_local?: string;
  dt_planejada?: Date | string | number;
  visitado?: boolean;
  ts_visitado?: Date;
  id_viagem?: number; //Viagem a qual o lugar pertence
}
