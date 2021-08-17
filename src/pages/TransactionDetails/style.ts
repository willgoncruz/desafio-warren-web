import styled from 'styled-components';

export const CloseDetails = styled.button`
    position: absolute;

    top: 10px;
    right: 10px;

    background: transparent;
    border: 1px black solid;
    border-radius: 45%;
`;

export const TransactionTitle = styled.h1`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    width: fill-available;

    @media(min-width: 1024px) {
        font-size: 42px;
    }
`;

export const TransactionSubtitle = styled.h2`
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 0px;
    width: fill-available;

    @media(min-width: 1024px) {
        font-size: 24px;
    }
`;

export const TransactionText = styled.div`
    font-size: 14px;
    width: fill-available;

    @media(min-width: 1024px) {
        font-size: 16px;
    }
`;

export const AggregatedContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

export const TransactionDetailsContainer = styled.div`
    position: fixed;

    top: 60px;
    left: 12px;
    right: 12px;
    bottom: 16px;

    padding: 0 56px;
    background: white;
    border-radius: 16px;

    @media(min-width: 1024px) {
        top: 20%;
        left: 20%;
        right: 20%;
        bottom: 20%;

        padding: 0 80px;
    }
`;