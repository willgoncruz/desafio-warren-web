import axios from 'axios';
import { TransactionStatus } from '../model/status';
import { Transaction } from '../model/transaction';

interface TransactionListResponse {
    data: Transaction[]
}

interface TransactionDetailsResponse {
    data: Transaction
}

const baseURL = process.env.REACT_APP_API_URL;

const orderByDate = (transactions: Transaction[]) => {
    return transactions.sort((a, b) => a.date < b.date ? -1 : 1);
};

// Esse método filtra os resultados das transações de acordo com o título e status recebidos
export const filter = (transactions: Transaction[], term: string, status: TransactionStatus) => {
    if (term) {
        term = term.toLowerCase();
        transactions = transactions.filter((t) => t.title.toLowerCase().includes(term));
    }

    if (status !== TransactionStatus.empty) {
        transactions = transactions.filter((t) => t.status === status);
    }

    return transactions;
}

/**
 * Abaixos estão os métodos de request para as APIs
 */
export const getTransactionList = () => new Promise<Transaction[]>((resolve, reject) => {
    axios.get(`${baseURL}/transactions`).then((response: TransactionListResponse) => {
        const transactions = response.data;
        resolve(orderByDate(transactions));
    }).catch(() => {
        reject([])
    });
});

export const getTransactionDetails = (id: string) => new Promise<Transaction>((resolve, reject) => {
    axios.get(`${baseURL}/transactions/${id}`).then((response: TransactionDetailsResponse) => {
        resolve(response.data);
    }).catch(() => {
        reject(null);
    });
});