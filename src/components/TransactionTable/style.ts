import styled from "styled-components";

export const TableRow = styled.tr`
    &:nth-child(2n) {
        background-color: #DEDEDE;
        border-color: #DEDEDE;
    }
`;

export const TransactionTableContainer = styled.table`
    margin: 32px;
    border: 1px solid #ECECEC;
    border-spacing: 0;
    border-collapse: collapse;
`;

export const TableColumn = styled.td`
    font-size: 12px;
    padding: 2px 8px;

    @media(min-width: 1024px) {
        font-size: 16px;
        padding: 8px 16px;
    }
`;

export const TableHeaderColumn = styled(TableColumn)`
    font-weight: bold;
`;

export const AmountColumn = styled.div`
    display: flex;
    justify-content: space-between;
`;