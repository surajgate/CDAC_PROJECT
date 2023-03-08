import React, { useEffect, useState } from 'react'
import { json, useNavigate } from "react-router-dom";
// import logo from "../images/Logo-navbar.png"
import "../css/Doctor.css"
export default function Doctor() {

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(84, 139, 187)"

    const navigate = useNavigate();
    // const [xyz, setXyz] = useState([]);
    const [cat, setcat] = useState([])
    var array;

    useEffect(() => {

        // console.log('use effect called , call API');

        fetch('http://localhost:8080/doctor/allDoctors')
            .then(res => res.json())
            .then(valueFromAPI => {
                console.log('API DATA CALLED');
                console.log(valueFromAPI);
                setcat(valueFromAPI)

            })
    }, []);

    var M1 = () => {
        var email = document.getElementById("exampleInputEmail1").value;
        var password = document.getElementById("exampleInputPassword1").value;
        alert(email +" "+ password);
        var b = false;
        console.log(b);
        console.log(email);
        console.log(password);

        cat.forEach(element => {
                if (element.email === email && element.password === password) {
                    b = true;
                }
            });
       
        console.log(b);
        c();
        function c() {

            if (b === true) {
                navigate("/doctor-home");
            }
            else {
                navigate("/doctor");
            }
        }
    }

    return (
        <div class="container-fluid w-25 p-3 h-100 mt-5 ">

            <form class="form-control-md">
                <h1 class="text-center mb-4 display-5">Login</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-secondary" onClick={M1}>Login</button>
                </div>
            </form>
        </div>


    )
}
