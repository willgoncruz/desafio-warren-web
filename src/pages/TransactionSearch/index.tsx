import { useEffect, useState } from 'react';
import { Divisor } from '../../components/Divisor';
import { SearchBar } from '../../components/SearchBar';
import { Transaction } from '../../model/transaction';
import { getTransactionList } from '../../api/transaction';
import { TransactionTable } from '../../components/TransactionTable';

import {
    LogoContainer,
    TransactionSearchContainer
} from './style';

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
            <div>{term}</div>
            <LogoContainer />
            <Divisor />

            <TransactionSearchContainer>
                <SearchBar onChange={onChange}/>
                <TransactionTable transactions={transactions} />
            </TransactionSearchContainer>
        </div>
    );
}

export default TransactionSearchPage;