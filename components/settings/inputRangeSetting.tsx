import { FC } from "react";
import styled from "styled-components";
import MyInputRange from "../UI/myInputRange";

const StyledInputRangeSetting = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
h1 {
  margin-top: 0px;
}
h1, h2{
  align-self: center;
}
div {
    display: flex;
    justify-content: space-between;
    width: 490px;
    height: 30px;
    align-self: center;
}
`
interface InputRangeSettingProps {
    title: string,
    inputTitleArr: string[],
    min: string,
    max: string,
    value: number,
    onChange: Function,
    color?: string,
    output: string
}

const InputRangeSetting:FC<InputRangeSettingProps> = ({title, inputTitleArr, min, max, value, onChange, color, output}) => {
    return <StyledInputRangeSetting>
        <h1>{title}</h1>
        <div>
            {inputTitleArr.map((inputTitle, i) => {
                return <h2 key={i}>{inputTitle}</h2>
            })}
        </div>
        <MyInputRange min={min} max={max} value={value} onChange={onChange} color={color} />
        <h2>{output}</h2>
    </StyledInputRangeSetting>
}

export default InputRangeSetting