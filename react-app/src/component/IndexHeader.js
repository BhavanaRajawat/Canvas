import React,{Component} from 'react';
 import loginLogo from '../images/loginLogo.png';
 import {navbarInverse} from 'react-bootstrap';




class IndexHeader extends Component{

render(){

	return (
    
  <div>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>


            <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                <a class="navbar-brand" href="#"> <img src={loginLogo} class="img-responsive" /> </a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav  navbar-right">
                    <li class="border-down"><a href="#">Resume</a></li>
                    <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#">Branding <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 1</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Resources</a></li>
                    <li class="rounded-border"><a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span> Sign Up</a></li>
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