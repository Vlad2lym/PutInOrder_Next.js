import { DragEventHandler, FC } from "react";
import styled, { css } from "styled-components";

const StyledCircle = styled.div<CircleProps>`
width: 90px;
height: 90px;
background-color: #9d64c3;
clip-path: circle(50%);
display: flex;
justify-content: center;
align-items: center;
color: mistyrose;
font-size: 2rem;
margin: 10px;
cursor: grab;
${props => props.sorted && css`
    background-color: mistyrose;
    cursor: default;
`}
`
interface CircleProps {
    children: number | string,
    sorted?: boolean,
    draggable?: boolean,
    onDragStart?: DragEventHandler,
    onDragEnd?: DragEventHandler,
    onDragOver?: DragEventHandler,
    onDrop?: DragEventHandler
}

const Circle:FC<CircleProps> = (props) => {
    return (
        <StyledCircle {...props}/>
    )
}

export default Circle