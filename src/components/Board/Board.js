import React, { useState } from "react"
import { Square } from "../Square/Square";
import './Board.css'

const calculateWinner = (squares) =>{
    
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}

export const Board = () => {
    const [isXNext, setIsXNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
     const winner = calculateWinner(squares);
     let status;
     if(winner){
        status = "Winner is: "+ winner
     } else{
        status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }
    const handleClick = (i) =>{
        console.log("clicked", i)
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        setSquares((old)=>{
            let squares = [...old];
            squares[i] = isXNext ? "X" : "O";
            return squares;
        })
        setIsXNext((old)=>{
            return !old
        })
    }


    const renderSquare = (i) => {
        return (
            <Square 
            value={squares[i]} 
            onClick={() => handleClick(i)}>
            </Square>
        )
    }

    return(
        <div>
            <div className="status">{status}</div>
            <div className= "board-row">
                { renderSquare(0) }
                { renderSquare(1) }
                { renderSquare(2) }
            </div>
            <div className= "board-row">
                { renderSquare(3) }
                { renderSquare(4) }
                { renderSquare(5) }
            </div>
            <div className= "board-row">
                { renderSquare(6) }
                { renderSquare(7) }
                { renderSquare(8) }
            </div>
        </div>
    )

}