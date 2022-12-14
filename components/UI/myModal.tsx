import { FC } from "react";
import styled, { css } from "styled-components";

const StyledModal = styled.div<MyModalProps>`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: none;
background: rgba(0, 0, 0, .5);

${props => props.active && css`
    display: flex;
    justify-content: center;
    align-items: center;
`}
`
const StyledModalContent = styled.div`
padding: 40px;
background: aliceblue;
border-radius: 16px;
min-width: 650px;
min-height: 600px;
display: flex;
justify-content: center;
`
interface MyModalProps {
    children: any,
    visible?: boolean,
    active?: boolean
}

const MyModal:FC<MyModalProps> = ({children, visible}) => {
    return (
        <StyledModal active={visible}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
                {children}
            </StyledModalContent>
        </StyledModal>
    )
}

export default MyModal