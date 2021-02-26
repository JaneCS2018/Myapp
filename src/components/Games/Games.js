import React from 'react';

import Game from '../../components/Game/Game';
import './Games.css';



const Games =()=>(
    <div>
        <div className="container-fluid mx-auto game_arr mt-5">
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <Game GameTitle="Game Title" GameGrade="2nd Grade"/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Game GameTitle="Game Title" GameGrade="2-4"/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Game GameTitle="Game Title two lines" GameGrade="2nd Grade"/>
                </div>
            </div>
       </div>
    </div>

)

export default Games;