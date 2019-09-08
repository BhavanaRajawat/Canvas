import React ,{Component} from 'react';
import LoginForm from './LoginForm.js';
import LoginHeader from './LoginHeader.js';
import IndexHeader from './IndexHeader.js';

class View extends Component{

 render(){

 	return(

         <div>
         <LoginHeader/>

         <LoginForm/>
          
         </div>

 		);
 }

}

export default View;
