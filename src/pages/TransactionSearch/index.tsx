import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { Transaction } from '../../model/transaction';
import { getTransactionList } from '../../api/transaction';
import { TransactionTable } from '../../components/TransactionTable';

const TransactionSearchPage = () => {
    const [ term, setTerm ] = useState<string>("");
    const [ transactions, setTransactions ] = useState<Transaction[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    useEffect(() => {
        getTransactionList().then((response: Transaction[]) => {
            setTransactions(response);
        });
    }, []);

    return (
        <div>
            <SearchBar onChange={onChange}/>
            <TransactionTable transactions={transactions} />
        </div>
    );
}

export default TransactionSearchPage;