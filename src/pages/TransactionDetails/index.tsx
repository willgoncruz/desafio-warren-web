import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { StatusBar } from '../../components/StatusBar';
import { Transaction } from '../../model/transaction';
import { getTransactionDetails } from '../../api/transaction';

import {
    Divisor,
    TransactionText,
    TransactionTitle,
    TransactionSubtitle,
    AggregatedContainer,
} from './style';

interface TransactionDetailsProps {
    id: string
}

const TransactionDetailsPage = () => {
    const { id } = useParams<TransactionDetailsProps>();
    const [ transaction, setTransaction ] = useState<Transaction | null>(null);

    useEffect(() => {
        getTransactionDetails(id).then((response: Transaction) => {
            setTransaction(response);
        });
    }, [id]);

    if (!transaction) {
        return (<div>NULO</div>);
    }

    const { title, status, amount, from, to } = transaction;

    return (
        <div>
            <TransactionTitle>{title}</TransactionTitle>

            <StatusBar status={status} />

            <TransactionSubtitle>Valor</TransactionSubtitle>
            <Divisor />

            <TransactionText>R$ {amount}</TransactionText>

            <AggregatedContainer>
                <TransactionSubtitle>Transferido de</TransactionSubtitle>
                <TransactionSubtitle>Para</TransactionSubtitle>
            </AggregatedContainer>
            <Divisor />

            <AggregatedContainer>
                <TransactionText>{from}</TransactionText>
                <TransactionText>{to}</TransactionText>
            </AggregatedContainer>
        </div>
    );
}

export default TransactionDetailsPage;