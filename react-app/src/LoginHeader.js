import React , { Component} from 'react';
import './CanvasApp.css';
import loginLogo from './images/loginLogo.png';


class LoginHeader extends Component {


render() {


    return (
               <div className="container">
               <nav className="login-nav">
                 <div className="row">
                  <div className="col-md-6">
               <img src={loginLogo} />
                </div>
                 <div className="login-btn">
        <ul>
            <li> <a href="#">Sign Up</a> </li>
             <li> <a href="#">Login</a> </li>
            </ul>
        </div>
    </div>
    </nav>
        </div>


    	);



}

}

export default LoginHeader;