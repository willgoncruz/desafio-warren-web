
import { Transaction } from '../../model/transaction';
import { getTransactionList } from '../../api/transaction';
import { useEffect, useState } from 'react';

const TransactionSearchPage = () => {
    const [ transactions, setTransactions ] = useState<Transaction[]>([]);

    useEffect(() => {
        getTransactionList().then((response: Transaction[]) => {
            setTransactions(response);
        });
    }, []);

    return (
        <div>Search, {transactions.map((t) => t.title )}</div>
    );
}

export default TransactionSearchPage;