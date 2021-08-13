import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Transaction } from '../../model/transaction';
import { LocationState } from '../../model/location';
import { getTransactionStatusName } from '../../model/status';
import {
    TableColumn,
    AmountColumn,
    TableHeaderColumn,
    TransactionTableContainer
} from './style';

interface TransactionTableProps {
    transactions: Transaction[]
}

interface TransactionItemProps {
    transaction: Transaction
}

interface DetailsLinkProps {
    id: string,
    children: React.ReactNode
}

const TableHeader = () => {
    return (
        <tr>
            <TableHeaderColumn>Título</TableHeaderColumn>
            <TableHeaderColumn>Descrição</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Valor</TableHeaderColumn>
            <TableHeaderColumn>Data</TableHeaderColumn>
        </tr>
    );
};

const DetailsLink = (props: DetailsLinkProps) => {
    const { id, children } = props;
    const location = useLocation<LocationState>();
    const pathname = `/transaction/${id}`;

    return (
        <Link to={{ pathname, state: { background: location } }}>
            {children}
        </Link>
    );
};

const TableItem = (props: TransactionItemProps) => {
    const { transaction } = props;
    return (
        <tr>
            <TableColumn>
                <DetailsLink id={transaction.id}>{transaction.title}</DetailsLink>
            </TableColumn>
            <TableColumn>{transaction.description}</TableColumn>
            <TableColumn>{getTransactionStatusName(transaction.status)}</TableColumn>
            <TableColumn>
                <AmountColumn>
                    <span>R$</span> <span>{transaction.amount}</span>
                </AmountColumn>
            </TableColumn>
            <TableColumn>
                {transaction.date}
            </TableColumn>
        </tr>
    );
};

export const TransactionTable = (props: TransactionTableProps) => {
    const { transactions } = props;
    return (
        <TransactionTableContainer>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                { transactions.map((t, i) => <TableItem key={i} transaction={t} />) }
            </tbody>
        </TransactionTableContainer>
    );
};