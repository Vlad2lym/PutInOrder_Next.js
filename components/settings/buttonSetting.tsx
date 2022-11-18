import { FC } from "react";
import styled from "styled-components";
import MyButton from "../UI/myButton";

const StyledButtonSetting = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 20px auto;
`
interface ButtonSettingProps {
    titleButtonLeft: string,
    titleButtonRight: string,
    value: boolean,
    onClick: Function
}

const ButtonSetting:FC<ButtonSettingProps> = ({titleButtonLeft, titleButtonRight, value, onClick}) => {
    return <StyledButtonSetting>
        <div onClick={value ? () => undefined : () => onClick()}>
            <MyButton active={value} inactive={!value} >{titleButtonLeft}</MyButton>
        </div>
        <div onClick={value ? () => onClick() : () => undefined}>
            <MyButton active={!value} inactive={value}  >{titleButtonRight}</MyButton>
        </div>
    </StyledButtonSetting>
}

export default ButtonSetting