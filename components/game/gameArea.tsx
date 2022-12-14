import Link from "next/link";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import MyModal from "../UI/myModal";
import AscendingDescending from "./ascendingDescending";
import VictoryModalContent from "./victoryModalContent";
import Circle from "./circle";
import styled from "styled-components";

const StyledGameArea = styled.div`
min-height: 100%;
display: flex;
flex-direction: column;
`
const StyledLink = styled.div`
display: flex;
justify-content: end;
& h2{
    margin: 0px;
}
`
const StyledItemsOfGame = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1 1 auto;
`
const StyledSortedItemsOfGame = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;
border: 5px solid ${props => props.theme.colors.myYellow};
border-radius: 40px;
background-color: ${props => props.theme.colors.myYellow};
`

const GameArea:FC = () => {
    const {numberItems, valueItems, ascending} = useAppSelector(state => state.setting)
    const [draggableItem, setDraggableItem] = useState<string | number>()
    const [visibleModal, setVisibleModal] = useState(false)
    const sortedItemsDiv = useRef(null)

    const itemsOfGame: number[] | string[] = useMemo(()=> {
        let min: number,
            max: number;
        switch (valueItems) {
        case 0:
            min = "A".codePointAt(0) || 65;
            max = "Z".codePointAt(0) || 90;
            break;
        case 1:
            min = 1;
            max = 9;
            break;
        case 2:
            min = 10;
            max = 19;
            break;
        case 3:
            min = 20;
            max = 50;
            break;
        case 4:
            min = 51;
            max = 99;
            break;
        case 5:
            min = 100;
            max = 999;
            break;
        default:
            min = 1;
            max = 10
        }

        let setItems = new Set<number>;
        while (setItems.size < numberItems) {
            let random = Math.round(min - 0.5 + Math.random()*(max-min +1))
            setItems.add(random)
        }

        if (valueItems === 0) {
            return [...setItems].map(code => String.fromCodePoint(code))
        }
        return [...setItems]
    }, [])

    const [itemsOfGameArr, setItemsOfGameArr] = useState(() => [...itemsOfGame])

    useEffect(() => {
        if (!itemsOfGameArr.length) {setVisibleModal(() => true)}
    }, [itemsOfGameArr])

    const sortedItemsOfGame = ascending ? 
        valueItems === 0 ? [...itemsOfGame].sort() : [...itemsOfGame].sort((a, b) => +a - +b)
        :
        valueItems === 0 ? [...itemsOfGame].sort().reverse() : [...itemsOfGame].sort((a, b) => +b - +a)

    const wrongDrop = (domElement:HTMLDivElement|null) => {
        domElement!.style.backgroundColor = '#ed3030';
        setTimeout(() => {
            domElement!.style.backgroundColor = '#bb9f3e';
        }, 600)
    }

    const correctDrop = (e:React.DragEvent<HTMLDivElement>, item:string | number) => {
        (e.target as HTMLDivElement).style.backgroundColor = '#239523';
        setItemsOfGameArr(itemsOfGameArr.filter(i => i !== item))
    }
   
    const dragStartHandler = (e:React.DragEvent<HTMLDivElement>, item:string | number) => {
        setDraggableItem(item);
        (e.target as HTMLDivElement).style.backgroundColor = '#7e2fb3';
    }

    const dragEndHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        (e.target as HTMLDivElement).style.backgroundColor = '#9d64c3';
    }

    const dropHandler = (e:React.DragEvent<HTMLDivElement>, item:string | number) => {
        e.preventDefault()
        draggableItem === item ?  correctDrop(e, item) : wrongDrop(sortedItemsDiv.current)
    }
    
    return (
        <StyledGameArea>
            <StyledLink><Link href='/'><h2>Back to settings</h2></Link></StyledLink>
            <StyledItemsOfGame>
                {itemsOfGameArr.map(item => {
                    return <Circle 
                        key={item}
                        draggable
                        onDragStart={(e:React.DragEvent<HTMLDivElement>) => dragStartHandler(e, item)}
                        onDragEnd={(e:React.DragEvent<HTMLDivElement>) => dragEndHandler(e)}
                        >{item}
                    </Circle>
                })}
            </StyledItemsOfGame>
            <AscendingDescending ascending={ascending}/>
            <StyledSortedItemsOfGame ref={sortedItemsDiv}>
                {sortedItemsOfGame.map(item => {
                    return <Circle 
                        key={item}
                        sorted={true}
                        onDragOver={(e:React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                        onDrop={(e:React.DragEvent<HTMLDivElement>) => dropHandler(e, item)}
                        >{item}
                    </Circle>
                })}
            </StyledSortedItemsOfGame>
            <MyModal visible={visibleModal}>
                <VictoryModalContent/>
            </MyModal>
        </StyledGameArea>
    )
}

export default GameArea