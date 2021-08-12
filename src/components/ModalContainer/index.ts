import styled, { keyframes } from "styled-components"

const fadein = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

const BackdropContainer = styled.div`
    top: 0;
    left: 0;
    position: fixed;

    width: 100vw;
    height: 100vh;

    z-index: 1;
`;

export const ModalContainer = styled(BackdropContainer)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.8);
    animation: ${fadein} .5s linear;
`;