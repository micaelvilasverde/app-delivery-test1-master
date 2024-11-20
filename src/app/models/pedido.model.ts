import { Prato } from './prato.model'; // Adicione esta linha para importar Prato

export interface Pedido {
    id?: number; // Torna o id opcional
    cliente: string;
    status: string;
    itens: { nome: string; quantidade: number }[];
    pratos?: Prato[]; // Define a lista de pratos como opcional
}
