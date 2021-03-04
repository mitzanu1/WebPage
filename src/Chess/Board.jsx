import React, { useEffect } from 'react'
import actions from '../store/actions'
import { useSelector } from 'react-redux'
import { initBoard } from './boardInit'


const Board = () => {

    useEffect(()=>{
        initBoard()
    },[])

    let positions = useSelector(()=> actions.get('position', {}))
    let newRow = useSelector(()=> actions.get('newRow', ''))
    let newCol = useSelector(()=> actions.get('newCol', ''))

    const handleDrop = e => {
        let _newRow = e.target.style.gridArea.charAt(0)
        let _newCol = e.target.style.gridArea.charAt(4)
        actions.set('newRow', _newRow)
        actions.set('newCol', _newCol)
    }
    const handleDragOver = e => {
        e.preventDefault()
    }
    const handleDragStart = e => {
        console.log(e)
    }

    return (
        <div className='board-pos'>
            <p className='collabelT'>A B C D E F G H </p>
            <p className='collabelB'>A B C D E F G H </p>
            <p className='rowlabelL'>1 2 3 4 5 6 7 8 </p>
            <p className='rowlabelR'>1 2 3 4 5 6 7 8 </p>
            <div className='board'>
            {
                Object.values(positions).map((position)=>{
                    const {row, col, id} = position
                    let tileBackground;
                    let textColor;
                    if( (row % 2 != 0 && col % 2 != 0) || (row % 2 == 0 && col % 2 == 0)) {
                        textColor = 'white'
                        tileBackground = 'black'
                    }

                    return <div key={id} 
                                className='grid-item'
                                onDrop={(e) => handleDrop(e)}
                                onDragOver={(e) => handleDragOver(e)}
                                
                                style={{
                                    background:tileBackground,
                                    color:textColor,
                                    gridArea: `${row} / ${col}`
                                }}
                                >
                                {id}
                            </div>
                    })
            }
            {
                Object.values(positions).map((position)=> {
                    const {row, col, id} = position
                    if(row === 7) {
                        return (
                        <div 
                            key={`pawn ${id}`}
                            draggable='true'
                            onDragStart={(e) => handleDragStart(e)}
                            style={{ 
                                position:'absolute',
                                gridArea: `${row} / ${col}`,
                                color:'red'}}
                            >
                              Pawn
                        </div>
                        )
                    } 
                    
                })
            }
                
            </div>
        </div>
    )
}

export default Board
