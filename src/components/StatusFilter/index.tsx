import { TransactionStatus, getStatusListOfValues, getTransactionStatusName } from '../../model/status';

import { StatusSelect } from './style';

interface StatusFilterProps {
    selected: TransactionStatus,
    onChange: (status: TransactionStatus) => void
}

/**
 * StatusFilter é responsável pelo filtro de status, se utiliza de um select option para melhor funcionalidade
 */
export const StatusFilter = (props: StatusFilterProps) => {
    const { selected, onChange } = props;

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange((e.target.value as unknown) as TransactionStatus);
    };

    return (
        <StatusSelect value={selected} onChange={onSelectChange}>
            <option value={getTransactionStatusName(TransactionStatus.empty)}>Todos</option>
            {
                getStatusListOfValues().map((status, i) =>  <option key={i} value={getTransactionStatusName(status)}>{status}</option>)
            }
        </StatusSelect>
    );
}