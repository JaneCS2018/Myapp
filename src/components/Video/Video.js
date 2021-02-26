import React from 'react';

import './Video.css';



const Video =(props)=>(
    <div className="Video_element mx-auto mt-5 mb-5">
        <div className="Video_image"></div>
        <div className="VideoText text-center mx-auto mt-3 ">{props.VideoTitle}</div>
        <div className="VideoGrade text-center">{props.VideoGrade}</div>
    </div>

)

export default Video;