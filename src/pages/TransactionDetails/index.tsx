import { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { StatusBar } from '../../components/StatusBar';
import { Transaction } from '../../model/transaction';
import { ModalContainer } from '../../components/ModalContainer';
import { getTransactionDetails } from '../../api/transaction';

import { Divisor } from '../../components/Divisor';
import {
    TransactionText,
    TransactionTitle,
    TransactionSubtitle,
    AggregatedContainer,
    TransactionDetailsContainer
} from './style';

interface TransactionDetailsProps {
    id: string
}

const TransactionDetailsPage = () => {
    const history = useHistory();
    const { id } = useParams<TransactionDetailsProps>();
    const [ transaction, setTransaction ] = useState<Transaction | null>(null);

    useEffect(() => {
        getTransactionDetails(id).then((response: Transaction) => {
            setTransaction(response);
        });
    }, [id]);

    const downHandler = useCallback((e) => {
        if (e.key === "Backspace" || e.key === "Escape") {
            e.stopPropagation();
            history.goBack();
        }
    }, [history]);

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
        }
    }, [downHandler]);

    if (!transaction) {
        // TODO how to handle this
        return (<div>NULO</div>);
    }

    const { title, status, amount, from, to } = transaction;
    return (
        <ModalContainer>
            <TransactionDetailsContainer>
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
            </TransactionDetailsContainer>
        </ModalContainer>
    );
}

export default TransactionDetailsPage;