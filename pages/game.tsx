import Link from "next/link";
import React, { FC, useMemo, useState } from "react";
import MainLayout from "../components/layouts/mainLayout";
import { useAppSelector } from "../hooks/redux";
import styles from '../styles/Home.module.scss'

interface GameProps {

}

const Game:FC<GameProps> = () => {
    const {numberItems, valueItems, ascending} = useAppSelector(state => state.setting)
    const [draggableItem, setDraggableItem] = useState<string | number>()

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

    const sortedItemsOfGame = ascending ? 
        valueItems === 0 ? [...itemsOfGame].sort() : [...itemsOfGame].sort((a, b) => +a - +b)
        :
        valueItems === 0 ? [...itemsOfGame].sort().reverse() : [...itemsOfGame].sort((a, b) => +b - +a)

    const dragStartHandler = (e:React.DragEvent<HTMLDivElement>, item:string | number) => {
        setDraggableItem(item);
        (e.target as HTMLDivElement).style.cursor = 'grab';
    }

    const dropHandler = (e:React.DragEvent, item:string | number) => {
        e.preventDefault()
        draggableItem === item ? alert('true') : alert('false')
    }
    
    return (
    <MainLayout>
        <div className={styles.gameArea}>
            <div style={{display: 'flex', justifyContent: 'end'}}><Link href='/'><h2 style={{margin: '0px'}}>Back to settings</h2></Link></div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1 1 auto'}}>
                {itemsOfGame.map(item => {
                    return <div 
                        draggable
                        onDragStart={e => dragStartHandler(e, item)}
                        className={styles.circle}
                        >{item}
                    </div>
                })}
            </div>
            <div className={styles.sortedItemsOfGame}>
                {sortedItemsOfGame.map(item => {
                    return <div 
                        onDragOver={e => e.preventDefault()}
                        onDrop={e => dropHandler(e, item)}
                        className={styles.circle} 
                        style={{backgroundColor: 'green', cursor: 'default'}}
                        >{item}
                    </div>
                })}
            </div>
        </div>
    </MainLayout>
)}

export default Game