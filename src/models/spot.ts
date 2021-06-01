export interface Spot {
  id_local?: number;
  nome_local: string;
  dt_planejada?: Date | string;
  visitado?: boolean;
  ts_visitado?: Date;
  descricao_local?: string;
  id_viagem: number; //Viagem a qual o lugar pertence
}
