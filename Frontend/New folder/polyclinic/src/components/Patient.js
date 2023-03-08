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
                        <img src={logo} width="50px" height="50px" alt="" onClick={() => navigate("/")} />

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
                                <li class="nav-item px-2">
                                    <button class="nav1 btn btn-outline-success" onClick={() => navigate("/login")}>Login / SignUp</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <br />

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 order-sm-1 order-1">
                        <div class="banner_title" data-animation="fadeInLeft" animation-delay="2s" data-delay="0.3s">
                            <h1>Your Health<br /><span>Our Priority</span></h1>
                            <p class="py-3">India's Hassle Free Doctor Appointment Booking App. Get Seamless OPD experience by
                                booking the free appointment with India’s Top specialize doctor online. Q UP enhance the
                                connection between patient and doctor in best possible manner.</p>

                        </div>
                    </div>
                    <div class="col-lg-6 order-sm-2 order-2">
                        <img src="https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg" alt="image" />
                    </div>
                </div>
            </div>



        </div>
    )
}
