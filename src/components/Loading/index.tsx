import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: fit-content;
    margin-top: 48px;
`;

const LoadingAnimation = styled.div`
    box-sizing: border-box;
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #000;
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
`;

export const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingAnimation />
        </LoadingContainer>
    );
}