import React from 'react';

import './Game.css';



const Game =(props)=>(
    <div className="Game_element mx-auto mt-5">
        <div className="Game_image"></div>
        <div className="GameText text-center mx-auto mt-3">{props.GameTitle}</div>
        <div className="GameGrade text-center">{props.GameGrade}</div>
    </div>

)

export default Game;