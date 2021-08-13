import styled from 'styled-components';

export const StatusBarContainer = styled.div`
    width: 100%;
    margin-bottom: 56px;
`;

export const StatusBarProgression = styled.input`
    width: 100%;
    height: 30px;
    user-select: none;
    border-radius: 3px;
    background-color: #CECECE;
`;

export const StatusList = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
    align-items: center;
    justify-content: space-between;
`;

export const StatusItem = styled.div`
    font-size: 14px;

    @media(min-width: 1024px) {
        font-size: 16px;
    }
`;