import axios from 'axios';
import { Transaction } from '../model/transaction';

interface TransactionListResponse {
    data: Transaction[]
}

export const getTransactionList = () => new Promise<Transaction[]>((resolve, reject) => {
    axios.get('https://warren-transactions-api.herokuapp.com/api/transactions').then((response: TransactionListResponse) => {
        resolve(response.data);
    }).catch(() => {
        reject([])
    });
});