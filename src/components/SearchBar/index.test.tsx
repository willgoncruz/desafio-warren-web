import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { SearchBar } from './';

describe('Search Bar Component test', () => {
    it('Render with updatable input', () => {
        const onChange = jest.fn();
        render(<SearchBar onChange={onChange} />);

        const input = screen.getByRole('textbox');
        expect(input).toBeTruthy();

        fireEvent.change(input, { target: {value: '24/05/2020'} } );
        expect(onChange).toHaveBeenCalled();
    });
});