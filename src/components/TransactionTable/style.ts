import styled from "styled-components";

export const TransactionTableContainer = styled.table`
    border: 1px solid #ECECEC;
    margin: 32px;
`;

export const TableColumn = styled.td`
    font-size: 12px;
    padding: 2px 8px;

    @media(min-width: 1024px) {
        font-size: 16px;
        padding: 3px 10px;
    }
`;

export const TableHeaderColumn = styled(TableColumn)`
    font-weight: bold;
`;

export const AmountColumn = styled.div`
    display: flex;
    justify-content: space-between;
`;