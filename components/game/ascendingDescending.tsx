import { FC } from "react";
import styled, { css } from "styled-components";

const StyledAscending = styled.div<StyledAscendingProps>`
width: 270px;
padding: 10px;
& h1{
    margin: 0px;
}
& hr{
    border: 3px solid #91d970;
    border-radius: 6px;
}
${props => props.descending && css`
    align-self: flex-end;
    text-align: end;
`}
`
interface StyledAscendingProps {
    descending: boolean
}

interface AscendingDescendingProps {
    ascending: boolean
}

const AscendingDescending:FC<AscendingDescendingProps> = ({ascending}) => {
    return (
        <StyledAscending descending={!ascending}>
            <h1>{ascending ? 'ascending' : 'descending'}</h1>
            <hr/>
        </StyledAscending>
    )
}

export default AscendingDescending