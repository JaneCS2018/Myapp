import React from 'react';

import './Gra.css';



const Gra =(props)=>(

    <div className="grade_element mx-1 position-relative mt-3 mb-3" style={{
        background: props.bg,
        width: "100%",
        height:"220px",
        minWidth:"180px",
        color: "white",
        fontFamily: "'Myriad Pro', sans-serif",
        fontWeight: 'bolder',
        cursor:'pointer' 

        }}>
            
        <div className="title" style={{
            display:"flex",
            position:"absolute",
            top:"40%",
            left:"40%",
            transform: "translate(-50%, -50%)"

           }}>
            <div style={{
              fontSize:"9em"

            }}>{props.number}</div>

             <div  style={{
                 position:"absolute",
                 left:"95%",
                 top: "50%",
                 fontSize:"3em"
             }}>{props.last}</div>
            </div>  
        <div className="small_grade position-absolute text-center" style={{
            background: props.bgs,
            bottom:"0",
            width:"100%",
            fontSize:"2.5em"
            
            }}>Grade</div>    
    </div>
    
    
    
    )


export default Gra;