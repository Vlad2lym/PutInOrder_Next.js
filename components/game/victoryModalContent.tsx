import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import Title from "../layouts/title";
import MyButton from "../UI/myButton";

const StyledVictory = styled.div`
min-height: 100%;
display: flex;
flex-direction: column;
& h2{
    color: green;
    flex: 1 1 auto;
    text-align: center;
    font-size: 30px;
}
& img{
    align-self: center;
}
`
const VictoryModalContent:FC = () => {
    return (
        <StyledVictory>
            <Title>Victory</Title>
            <Image src='/winningСat.png' width={210} height={177} alt="cat"/>
            <h2>Well done! <br/>You have successfully completed the task!</h2>
            <Link href='/' style={{display: 'contents'}}><MyButton primary >RETRY</MyButton></Link>
        </StyledVictory>
    )
}

export default VictoryModalContent