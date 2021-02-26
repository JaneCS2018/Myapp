import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css';

import Nav from '../../components/Nav/Nav';
import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight} from '@fortawesome/free-solid-svg-icons'



class Home extends Component {
    render () {
        return (
       
            <div>
           
                  <div className="right_buttons">
                            <div className="Org_btns Org_btns_t">
                                <div className="Std_name">TEACHERS</div>  
                                <div className="arrow pt-1 px-2"><FontAwesomeIcon icon={faCaretRight} style={{fontSize:35}} /></div>
                            </div>
                    
                  
                            <div className="Org_btns">
                                <div className="Std_name">STUDENTS</div>  
                                <div className="arrow pt-1 px-2"><FontAwesomeIcon icon={faCaretRight} style={{fontSize:35}} /></div>
                            </div>    
                    </div>
              
                <Nav />
                <div className="container-fluid content">
                    <div className="row content_body">
                        <div className="col-lg-6 col-xs-6 p-5">
                           <div className="text_1">
                             Branching Beyond <br />
                             Boundaries Together  
                           </div>
                            <p className="text_2 mt-3">
                              Engage in activities that build <br /> 
                              confidence to explore new possibilities
                            </p>
                        </div>
                        <div className="col-lg-6 col-xs-6 p-5">
                            <img src={require("../../images/image.svg")} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="container-fluid Grade_buttons">
                    <Grade />
                 </div>    */}
               
            
            </div>
     
        );
    }
}

export default Home;