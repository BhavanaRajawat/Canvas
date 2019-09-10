import React,{Component} from 'react';
import IndexHeader from './IndexHeader.js';
import SiteBanner from './SiteBanner.js';
import SiteTemplate from './SiteTemplate';

class CVIndex extends Component 
{

  render (){

     return(

        <div>
       
        <IndexHeader/>
        <SiteBanner/>
        <SiteTemplate/>

        </div>


     	);

      


  }

}

export default CVIndex;