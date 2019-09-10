import React,{Component} from 'react';
 import loginLogo from '../images/loginLogo.png';
 import {navbarInverse} from 'react-bootstrap';




class IndexHeader extends Component{

render(){

	return (
    
  <div>

            <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> <span className="icon-bar"></span> <span class="icon-bar"></span> <span className="icon-bar"></span> </button>
                <a className="navbar-brand" href="#"> <img src={loginLogo} className="img-responsive" /> </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav  navbar-right">
                    <li className="border-down"><a href="#">Resume</a></li>
                    <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="#">Branding <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 1</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Resources</a></li>
                    <li className="rounded-border"><a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
                    <li class="rounded-border"><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
  </div>

    );




}




}

export default IndexHeader;