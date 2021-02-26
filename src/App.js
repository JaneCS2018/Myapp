import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './containers/Pages/Home';
import Grade2 from './containers/Pages/Grade2';
import Gra from './components/Gra/Gra';
import Footer from './components/Footer/Footer';


import {
  BrowserRouter,
  Link,
  Route,
} from "react-router-dom";


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
            <Route exact={true} path='/' render={() => (
                    <div>
                        <Home/>
                        <div className="container-fluid Grade_buttons">
                          <div className="container-fluid"> 
                              <div className="row grade_arr mx-auto p-5">
                                  <div className="col-lg-2 col-xs-0"></div>
                                  <div className="col-lg-1 col-xs-12 mx-3" id="Grade_2"> 
                                  {/* Link to Grade 2 */}
                                    <Link to="/Grade2"><Gra bg = "#3378C0" number="2" last="nd" bgs="#1A4A86"  /></Link>
                                  </div>
                                  <div className="col-lg-1 col-xs-12 mx-3">
                                      <Gra bg = "#EFD976" number="3" last="rd" bgs="#B8A145" />
                                  </div>
                                  <div className="col-lg-1 col-xs-12 mx-3">
                                      <Gra bg = "#DC853F" number="4" last="th" bgs="#9E5C2D" />
                                  </div>
                                  <div className="col-lg-1 col-xs-12 mx-3">
                                      <Gra bg = "#CB5243" number="5" last="th" bgs="#8B372F" />
                                  </div>
                                  <div className="col-lg-1 col-xs-12 mx-3">
                                      <Gra bg = "#B8D549" number="6" last="th" bgs="#588A4D" />
                                  </div>
                                  <div className="col-lg-1 col-xs-12 mx-3">
                                      <Gra bg = "#B992D1" number="7" last="th" bgs="#925CAD" />
                                  </div>
                                  <div className="col-lg-1 col-xs-12 mx-3">
                                      <Gra bg = "#81C4E2" number="8" last="th" bgs="#4990BB" />
                                  </div>
                              </div>
                         </div>
                       </div>  
                       <br />
                        <br />
                        <br />
                        <br />
                    <Footer /> 

                    </div>
                )}/>
           <Route exact={true} path='/Grade2' render={() => (
                        <div>
                          <Grade2 />
                        </div>
                    )}/> 
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
