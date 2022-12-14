import { FC } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<MyButtonProps>`
width: 250px;
border: none;
border-radius: 18px;
font-size: 1.75rem;
${props => props.active && css`
    height: 49px;
    background-color: ${props => props.theme.colors.myYellow};
    box-shadow: 5px 7px 8px #a2d3da;
`}
${props => props.inactive && css`
    hright: 41px;
    background-color: #c5b47b;
    &:hover {
        border: 4px solid ${props => props.theme.colors.myYellow};
        height: 49px;
        box-shadow: 5px 7px 8px #a2d3da;
        cursor: pointer;
    }
`}
${props => props.primary && css`
    margin: 40px 145px 20px;
    background-color: #58cbb0;
    width: 250px;
    height: 60px;
    border: none;
    border-radius: 18px;
    font-size: 1.75rem;
    cursor: pointer;
    &:hover {
        border: 4px solid ${props => props.theme.colors.myYellow};
        box-shadow: 5px 7px 8px #a2d3da;
    }
`}
`
interface MyButtonProps {
    children: string,
    active?: boolean,
    inactive?: boolean,
    primary?: boolean,
}

const MyButton:FC<MyButtonProps> = (props) => {
    return <StyledButton {...props}/>
}

export default MyButton