import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';


import Nav from '../../components/Nav/Nav';

import Footer from '../../components/Footer/Footer';

import Grade from '../../components/Grade/Grade';

import Games from '../../components/Games/Games';

import Videos from '../../components/Videos/Videos';

import './Home.css';
import './Grade2.css';





class Grade2 extends Component {
    render () {
        return (
            <div>
                      <div>
                            <div className="Org_btns Org_btns_2">
                                <div className="Std_name">THIS IS BEYOND ACADEMICS' STUDENTS PAGE</div>  
                            </div>   
                      </div>
                <Nav />
                
                <div className="container-fluid">
                    <Grade />
                </div>
                <div className="container-fluid mx-auto Grade_buttons">
                    <div className="data mx-auto">
                        <div className="Games pt-5 position-relative">New Games
                            <div className="More position-absolute">more like this</div>
                        </div>
                        <div>
                            <Games />
                        </div>

                        <br />
                        <div className="Games pt-5 pb-1 position-relative">New Videos
                            <div className="More position-absolute">more like this</div>
                        </div> 
                        <div>
                            <Videos />
                        </div>       
                    
                    
                  </div>
                </div>


                <Footer />
            </div>
        );
    }
}

export default Grade2;