import { FC } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
margin: 0 auto 50px;
line-height: 1.15;
font-size: 4rem;
color: ${props => props.color || props.theme.colors.myYellow};
display: flex;
justify-content: center;
`
interface TitleProps {
    children: string,
    color?: string
}

const  Title:FC<TitleProps> = (props) => {
    return <StyledTitle {...props} />
}

export default Title;