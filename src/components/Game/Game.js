import React from "react"
import { Board } from "../Board/Board";
import "./Game.css";

export const Game = () =>{

    return(
        <div className="App">
            <div className="game">
                    <Board />
            </div>
        </div>
    )

}