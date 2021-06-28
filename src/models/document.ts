export interface Document {
  id_documento?: number;
  id_viagem?: number;
  id_categoria_documento?: number;
  nome_documento: string;
  descricao: string,
  imagem_path?: string;
}
