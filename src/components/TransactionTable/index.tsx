import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Transaction } from '../../model/transaction';
import { LocationState } from '../../model/location';

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
            <td>Titulo</td>
            <td>Descricao</td>
            <td>Status</td>
            <td>Valor</td>
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
            <td><DetailsLink id={transaction.id}>{transaction.title}</DetailsLink></td>
            <td>{transaction.description}</td>
            <td>{transaction.status}</td>
            <td>R$ {transaction.amount}</td>
        </tr>
    );
};

export const TransactionTable = (props: TransactionTableProps) => {
    const { transactions } = props;
    return (
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                { transactions.map((t, i) => <TableItem key={i} transaction={t} />) }
            </tbody>
        </table>
    );
};