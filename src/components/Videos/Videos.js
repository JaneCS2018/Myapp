import React from 'react';

import Video from '../../components/Video/Video';
import './Videos.css';



const Videos =()=>(
    <div>
        <div className="container-fluid mx-auto Video_arr mt-5 ">
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <Video VideoTitle="Video Title" VideoGrade="2-4"/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Video VideoTitle="Video Title" VideoGrade="2-4"/>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <Video VideoTitle="Video Title two lines" VideoGrade="2-4"/>
                </div>
            </div>
       </div>
    </div>

)

export default Videos;