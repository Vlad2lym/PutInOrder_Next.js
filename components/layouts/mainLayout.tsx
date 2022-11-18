import { FC } from "react"
import styled from "styled-components"
import Box from "./box"
import Title from "./title"

interface MainLayoutProps {
    children: any,
    color?: string
}

const Container = styled.div`
padding: 0 2rem;
background-color: #A2D3DA;
`
const Main = styled.main`
min-height: 100vh;
padding: 4rem 0;
`
const Area = styled.div`
width: 541px;
height: 554px;
`
const MainLayout:FC<MainLayoutProps> = ({children}) => {

  return (
    <Container>
      <Main>
        <Title>Put in order</Title>
        <Box>
          <Area>
            {children}
          </Area>
        </Box>
      </Main>
    </Container>
  )
}

export default MainLayout;