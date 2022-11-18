import { FC } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
align-self: center;
-webkit-appearance: none;
width: 500px;
height: 8px;
background: rgba(162, 211, 218, 0.6);
border-radius: 5px;
background-image: linear-gradient(${props => props.color || props.theme.colors.myYellow}, ${props => props.color || props.theme.colors.myYellow});
background-repeat: no-repeat;
cursor: pointer;

&::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${props => props.color || props.theme.colors.myYellow};
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}
`
interface MyInputRangeProps {
    min: string,
    max: string,
    value: number,
    onChange: Function,
    color?: string
}

const MyInputRange:FC<MyInputRangeProps> = ({min, max, value, onChange, ...props}) => {
    return <StyledInput 
        type="range" value={value} 
        onChange={(e) => onChange(e)} 
        min={min} 
        max={max} 
        step="1" 
        style={{backgroundSize: `${(value-+min)*100/(+max-+min)}% 100%`}} 
        {...props}
    />
}

export default MyInputRange;