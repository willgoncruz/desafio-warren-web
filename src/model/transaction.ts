import { TransactionStatus } from './status';

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