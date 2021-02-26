import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

import './Nav.css';

import 'bootstrap/dist/css/bootstrap.css';

const Nav = (props) => (
    <div>
         <div className="Heading1"></div>

    
            <div className="container-fluid Heading2">
                <div className="row">
                    <div className="col-lg-1 col-xs-0"></div>
                    <div className="col-lg-5 col-xs-12 px-5 Logo">
                        Beyond Academics, INC.
                    </div>
                    <div className="col-lg-6 col-xs-12 position-relative">
                            <form className="form position-absolute" id="addItemForm">
                                <input
                                type="text"
                                className="input"
                                id="addInput"
                                placeholder="Search Beyond Academics, Inc."
                                />
                                <div className="search-click p-2">
                                    <FontAwesomeIcon icon={faSearch} style={{fontSize:27, color: 'white'}} />
                                </div>
                            </form>
                    </div>
                </div>
         </div>
    </div>
  
);

export default Nav;