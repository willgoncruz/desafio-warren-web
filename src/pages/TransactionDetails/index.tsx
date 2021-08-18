import { Fragment, useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { StatusBar } from '../../components/StatusBar';
import { Transaction, EMPTY_TRANSACTION } from '../../model/transaction';
import { ModalContainer } from '../../components/ModalContainer';
import { getTransactionDetails } from '../../api/transaction';

import { Divisor } from '../../components/Divisor';
import { Loading } from '../../components/Loading';
import {
    CloseDetails,
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

    const [ loading, setLoading ] = useState<Boolean>(true);
    const [ transaction, setTransaction ] = useState<Transaction>(EMPTY_TRANSACTION);

    useEffect(() => {
        getTransactionDetails(id).then((response: Transaction) => {
            setTransaction(response);
        }).finally(() => {
            setLoading(false);
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

    const closeModal = () => {
        history.goBack();
    };

    const { title, status, amount, from, to } = transaction;
    return (
        <ModalContainer>
            <TransactionDetailsContainer>
                { loading && <Loading /> }
                <CloseDetails onClick={closeModal}>X</CloseDetails>

                { !loading &&
                    <Fragment>
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
                    </Fragment>
                }
            </TransactionDetailsContainer>
        </ModalContainer>
    );
}

export default TransactionDetailsPage;