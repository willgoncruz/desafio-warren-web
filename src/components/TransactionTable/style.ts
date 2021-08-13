import styled from "styled-components";

export const TransactionTableContainer = styled.table`
    border: 1px solid #ECECEC;
`;

export const TableColumn = styled.td`
    padding: 3px 10px;
`;

export const TableHeaderColumn = styled(TableColumn)`
    font-weight: bold;
`;

export const AmountColumn = styled.div`
    display: flex;
    justify-content: space-between;
`;