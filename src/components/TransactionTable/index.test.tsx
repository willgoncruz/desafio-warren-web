import React from 'react';
import { render, screen } from '@testing-library/react';

import { TransactionTable } from './';
import { getTransactionStatusName, TransactionStatus } from '../../model/status';
import { Transaction } from '../../model/transaction';
import { MemoryRouter } from 'react-router';

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/example/path"
    })
}));

describe('Transaction Table Component test', () => {
    it('Render with empty list', () => {
        render(<TransactionTable transactions={[]} />);

        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(1);

        const header = rows[0];
        expect(header.textContent).toContain('Título');
        expect(header.textContent).toContain('Descrição');
        expect(header.textContent).toContain('Status');
        expect(header.textContent).toContain('Valor');
        expect(header.textContent).toContain('Data');
    });

    it('Render with one item in list', () => {
        const t: Transaction = {
            id: "id",
            to: "to",
            from: "from",
            date: "1900-01-01",
            title: "title",
            amount: 100.00,
            description: "description",
            status: TransactionStatus.created,
        };

        const transactions = [t]
        render(
            <MemoryRouter initialEntries={[`/`]}>
                <TransactionTable transactions={transactions} />
            </MemoryRouter>
        );

        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(2);

        const header = rows[0];
        expect(header.textContent).toContain('Título');
        expect(header.textContent).toContain('Descrição');
        expect(header.textContent).toContain('Status');
        expect(header.textContent).toContain('Valor');
        expect(header.textContent).toContain('Data');

        const data = rows[1];
        expect(data.textContent).toContain(t.title);
        expect(data.textContent).toContain(t.description);
        expect(data.textContent).toContain(getTransactionStatusName(t.status));
        expect(data.textContent).toContain(t.amount);
        expect(data.textContent).toContain(t.date);

        const link = screen.getByRole('link');
        expect(link.getAttribute('href')).toContain(`/transaction/${t.id}`);
    });
});