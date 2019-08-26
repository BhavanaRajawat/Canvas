import React , { Component} from 'react';
import './CanvasApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


library.add(faEnvelope,faLock);


class LoginForm extends Component {

   render(){

       
       return (

        <section className="login-bg">
     <div class="container">
            <div className="row">
            <div className="col-md-4">
              <div className="col-md-8"/>
                <div className="login-banner-text">
                <h2>Design Anything<br/> Publish Anywhere</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                </div>
                <div class="login-form">
                    <h2>Customer Login</h2>
                    <span className="h2-line"></span>
                    
              <FontAwesomeIcon icon="envelope" />
&nbsp;<input type="email" placeholder="Email ID"/><br/>
                  <FontAwesomeIcon icon="lock" />&nbsp; <input type="password" placeholder="Password"/>
                    <br/>
                   
                  
                        <div className="login-forgot">
                        <input type="checkbox" style={{"width": "50px"}}/>Remember me
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">Forgot Password ?</a>
                        </div>
               
                 
                    <div className="site-login-btn">
                    <a href="#">LOGIN</a>
                    </div>
                </div>

                
             </div>

      </div>
         </div>
        </section>




       	);



   }




}

export default LoginForm;






