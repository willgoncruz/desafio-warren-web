import { getTransactionStatusName } from '../../model/status';

interface StatusBarProps {
    status: string
}

export const StatusBar = (props: StatusBarProps) => {
    const { status } = props;
    return (
        <div>
            {getTransactionStatusName(status)}
        </div>
    );
};