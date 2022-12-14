import { FC } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
width: 699px;
height: 660px;
background-color: aliceblue;
border-radius: 40px;
border: 6px solid ${props => props.color || props.theme.colors.myYellow};
`
interface BoxProps {
    children: any,
    color?: string
}

const Box:FC<BoxProps> = (props) => {
    return <StyledBox {...props}/>
}

export default Box;