import React,{Component} from 'react';
import owlSide from '../images/owlSide.png';
import carousel from '../images/carousel.png';
class SiteTemplate extends Component{

 render(){

    return (

 <section className="site-template">
        <div className="container">
            <h2 className="template-header">
              Resume Template
          </h2>
            <center><span className="underline"></span></center>
            <div className="owl-carousel owl-theme">
            <div class="owl-stage-outer">
                <div className="owl-item active" style={{"width": "240px"}}> 
                <div>
                <img src={owlSide} style={{"width": "100%" , "height": "400px","object-fit": "contain"}}/> 
                </div>
                </div>
                <div className="owl-item active" style={{"width": "240px"}}> 
                <div>
               <img src={carousel} className="img-responsive"/> 
               </div>
               </div>
               <div className="owl-item active" style={{"width": "240px"}}> 
                <div>
              <img src={owlSide} style={{"width": "100%" , "height": "400px" ,"object-fit": "contain"}}/> </div>
              </div>
            </div>
            <div className="owl-load"> <a href="#">LOAD MORE</a> </div>
            </div>
        </div>
    </section>


    	);




 }

}

export default SiteTemplate;