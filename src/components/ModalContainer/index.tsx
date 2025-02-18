import React from 'react';
import styled, { keyframes } from 'styled-components';
import FocusTrap from 'focus-trap-react';

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

const Modal = styled(BackdropContainer)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.8);
    animation: ${fadein} .5s linear;
`;

interface ModalProps {
    children: React.ReactNode
}

/**
 * ModalContainer expõe um componente de modal reutilizável, que se encarrega de posicionar e estilizar o fundo do modal.
 * Além disso, ele imbute a funcionalidade de focus trap, para que as interações com o teclado (Tab, scroll) ocorram
 *      apenas dentro do modal quando ele estiver ativo.
 */
export const ModalContainer = (props: ModalProps) => {
    return (
        <Modal>
            <FocusTrap active>
                {props.children}
            </FocusTrap>
        </Modal>
    );
};