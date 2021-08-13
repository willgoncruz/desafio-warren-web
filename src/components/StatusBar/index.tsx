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

export const StatusBar = (props: StatusBarProps) => {
    const { status } = props;
    const statuses = getStatusListOfValues();
    const progress = 50 * (statuses.indexOf(getTransactionStatusName(status)));
    return (
        <StatusBarContainer>
            <StatusBarProgression type="range" value={progress} min={0} max={100} />

            <StatusList>
                {statuses.map((s, i) =>
                    <StatusItem key={i}>{s}</StatusItem>
                )}
            </StatusList>
        </StatusBarContainer>
    );
};