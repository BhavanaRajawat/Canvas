import React,{Component} from 'react';

import bannerVector from "../images/bannerVector.png";
import CanvasApp from '../css/CanvasApp.css';

class SiteBanner extends Component {

 render(){

     return (



 <section className="site-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="banner-text">
                        <h2>Create A Job-Ready <br/>Resume In Minutes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, veritatis ipsa, iure amet velit autem ea ipsum esse laudantium sunt itaque ad consectetur odit est sint. Voluptates rem perferendis eaque.</p>
                        <div className="banner-btn"> <a href="#">GET STARTED</a> </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="banner-vector"> <img src={bannerVector} className="img-responsive" /> </div>
                </div>
            </div>
        </div>
    </section>

     	);


 }

}

export default SiteBanner;

