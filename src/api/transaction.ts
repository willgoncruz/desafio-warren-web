import axios from 'axios';
import { Transaction } from '../model/transaction';

interface TransactionListResponse {
    data: Transaction[]
}

interface TransactionDetailsResponse {
    data: Transaction
}

const baseURL = `https://warren-transactions-api.herokuapp.com/api`;

const orderByDate = (transactions: Transaction[]) => {
    return transactions.sort((a, b) => a.date < b.date ? -1 : 1);
};

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