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