import { Cliente } from './../clientes/cliente';
export class ServicoPrestado {
    id: number;
    descricao: string;
    valor: string;
    data: string;
    idCliente = 0;
    cliente: Cliente;
}