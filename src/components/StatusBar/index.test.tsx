import React from 'react';
import { render, screen } from '@testing-library/react';

import { StatusBar } from './';
import { TransactionStatus, getStatusListOfValues, getTransactionStatusName } from '../../model/status';

describe('Status Bar Component test', () => {
    it('Render at initial position', () => {
        const status = getTransactionStatusName(TransactionStatus.created);
        render(<StatusBar status={status} />);
        expect(screen.getByRole('slider')).toHaveValue('0');
    });

    it('Render at middle position', () => {
        const status = getTransactionStatusName(TransactionStatus.processing);
        render(<StatusBar status={status} />);
        expect(screen.getByRole('slider')).toHaveValue('50');
    });

    it('Render at final position', () => {
        const status = getTransactionStatusName(TransactionStatus.processed);
        render(<StatusBar status={status} />);
        expect(screen.getByRole('slider')).toHaveValue('100');
    });

    it('Render all status values', () => {
        const status = getTransactionStatusName(TransactionStatus.created);
        render(<StatusBar status={status} />);
        expect(screen.getByRole('slider')).toHaveValue('0');

        getStatusListOfValues().map((s) => {
            expect(screen.getByText(s)).toBeTruthy();
        });
    });
});