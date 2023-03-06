import React from 'react'
//import "../css/Patient.css"
import logo from "../images/Logo-navbar.png"
import { Link, useNavigate } from "react-router-dom";

export default function Patient() {
    const navigate = useNavigate();
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white"
  return (
    <div class="container-fluid">
    <header>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary  ">
        <div class="container-fluid ">
            <img src={logo} width="50px" height="50px" alt="" onClick={() => navigate("/")}/>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul class="navbar-nav" >
                    <li class="nav-item px-2">
                        <Link class="nav1 nav-link active" aria-current="page" to="/patient">Home</Link>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav1 nav-link" href="#">Specialities</a>
                    </li>
                    <li class="nav-item px-2">
                        <button class="nav1 btn btn-outline-success">Book Appoinment</button>
                       
                    </li>
                    <li class="nav-item px-2">
                        <button class="nav1 btn btn-outline-success" onClick={() => navigate("/doctor")}>I'm Doctor</button>
                       
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
</header>
</div>
  )
}
