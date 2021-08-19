import { useEffect, useState } from 'react';
import { Divisor } from '../../components/Divisor';
import { SearchBar } from '../../components/SearchBar';
import { Transaction } from '../../model/transaction';
import { getTransactionList, filter } from '../../api/transaction';
import { TransactionTable } from '../../components/TransactionTable';
import { Loading } from '../../components/Loading';
import { TransactionStatus } from '../../model/status';
import { StatusFilter } from '../../components/StatusFilter';
import {
    LogoContainer,
    FilterContainer,
    TransactionSearchContainer
} from './style';

const TransactionSearchPage = () => {
    const [ loading, setLoading ] = useState<Boolean>(true);
    const [ term, setTerm ] = useState<string>("");
    const [ status, setStatus ] = useState<TransactionStatus>(TransactionStatus.empty);
    const [ transactions, setTransactions ] = useState<Transaction[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    useEffect(() => {
        getTransactionList().then((response: Transaction[]) => {
            setTransactions(response);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const filtered = filter(transactions, term, status);
    return (
        <div>
            <LogoContainer src={`${process.env.PUBLIC_URL }/logo512.png`} alt='logo' />
            <Divisor />

            <TransactionSearchContainer>
                <FilterContainer>
                    <SearchBar onChange={onChange}/>
                    <StatusFilter selected={status} onChange={setStatus} />
                </FilterContainer>

                <TransactionTable transactions={filtered} />

                { loading && <Loading /> }
                { !loading && !filtered.length && <div>Nenhum resultado encontrado.</div> }
            </TransactionSearchContainer>
        </div>
    );
}

export default TransactionSearchPage;