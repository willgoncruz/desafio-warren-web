import { TransactionStatus } from './status';

/**
 * Modelo de Transação utilizado pelo sistema
 */
export interface Transaction {
    id: string,
    to: string,
    from: string,
    date: string,
    title: string,
    amount: number,
    status: TransactionStatus,
    description: string,
}

/**
 * Definição de uma transação vazia para uso em casos de erro ou não encontrada
 */
export const EMPTY_TRANSACTION: Transaction = {
    id: "",
    to: "",
    from: "",
    date: "",
    title: "Transação não encontrada ;-;",
    amount: 0,
    status: TransactionStatus.empty,
    description: "",
}