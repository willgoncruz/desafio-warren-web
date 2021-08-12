import axios from 'axios';
import { Transaction } from '../model/transaction';

interface TransactionListResponse {
    data: Transaction[]
}

interface TransactionDetailsResponse {
    data: Transaction
}

const baseURL = `https://warren-transactions-api.herokuapp.com/api`;

export const getTransactionList = () => new Promise<Transaction[]>((resolve, reject) => {
    axios.get(`${baseURL}/transactions`).then((response: TransactionListResponse) => {
        resolve(response.data);
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