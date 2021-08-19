import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { StatusFilter } from './';
import { getTransactionStatusName, TransactionStatus } from '../../model/status';

describe('Status Filter Component test', () => {
    it('Render with select fields', () => {
        const onChange = jest.fn();
        const selected = TransactionStatus.empty;
        render(<StatusFilter selected={selected} onChange={onChange} />);

        const select = screen.getByRole('combobox');
        expect(select).toBeTruthy();

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(4);

        expect(options[0].innerHTML).toContain('Todos');
        expect(options[0].getAttribute('value')).toBe(getTransactionStatusName(TransactionStatus.empty));

        expect(options[1].innerHTML).toContain(TransactionStatus.created);
        expect(options[1].getAttribute('value')).toBe(getTransactionStatusName(TransactionStatus.created));

        expect(options[2].innerHTML).toContain(TransactionStatus.processing);
        expect(options[2].getAttribute('value')).toBe(getTransactionStatusName(TransactionStatus.processing));

        expect(options[3].innerHTML).toContain(TransactionStatus.processed);
        expect(options[3].getAttribute('value')).toBe(getTransactionStatusName(TransactionStatus.processed));
    });

    it('Render with updatable select', () => {
        const onChange = jest.fn();
        const selected = TransactionStatus.empty;
        render(<StatusFilter selected={selected} onChange={onChange} />);

        const select = screen.getByRole('combobox');
        expect(select).toBeTruthy();

        fireEvent.change(select, { target: {value: getTransactionStatusName(TransactionStatus.created)} } );
        expect(onChange).toHaveBeenCalledWith("created");
    });
});