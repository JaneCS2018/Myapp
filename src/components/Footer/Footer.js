import React from 'react';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = (props) => (
    <div>
        <div className="container-fluid footer">
            <div className="row footer_content mx-auto pt-5">
                <div className="col-sm-3 col-xs-12 footer_subtitle">
                  <div className="mb-4">Beyond Academics, Inc.</div>
                  <p>Teacher access</p> 
                  <p>Students access</p>  
                </div>
                <div className="col-sm-3 col-xs-12 footer_subtitle">
                  <div className="mb-4">Resources</div>
                  <p>Testimonials</p>  
                  <p>Help</p> 
                  <p>Contact us</p>      
                </div>
                <div className="col-sm-3 col-xs-12 footer_subtitle">
                  <div className="mb-4">About</div>
                  <p>Company</p> 
                  <p>Term of Use</p>
                  <p>Privacy Policy</p>     
                </div>
            </div>
            
            <div className="copyright text-center mx-auto mt-3"><span>&#169;</span>2020 Beyond Academics, Inc. All rights reserved</div>
            </div>
    </div>
);

export default Footer;