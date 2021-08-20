import { TransactionStatus, getStatusListOfValues, getTransactionStatusName } from '../../model/status';

import {
    StatusList,
    StatusItem,
    StatusBarContainer,
    StatusBarProgression
} from './style';

interface StatusBarProps {
    status: TransactionStatus
}

/**
 * StatusBar é o componente responsável por mostrar o progresso do status da transação.
 * Foi utilizado um input type=range para melhor visualização e controle sobre essa funcionalidade.
 */
export const StatusBar = (props: StatusBarProps) => {
    const { status } = props;
    const statuses = getStatusListOfValues();
    const progress = (statuses.indexOf(getTransactionStatusName(status)));
    return (
        <StatusBarContainer>
            <StatusBarProgression type="range" value={progress} min={0} max={2} readOnly />

            <StatusList>
                {statuses.map((s, i) =>
                    <StatusItem key={i}>{s}</StatusItem>
                )}
            </StatusList>
        </StatusBarContainer>
    );
};