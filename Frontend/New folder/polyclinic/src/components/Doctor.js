
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
// import logo from "../images/Logo-navbar.png"
import "../css/Doctor.css"
export var doctor_id;
export default function Doctor() {
    // let email1 ="";
    // let password1 = "";

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(84, 139, 187)"

    const navigate = useNavigate();
    // const [xyz, setXyz] = useState([]);
    const [cat, setcat] = useState([])
    // var array;


    useEffect(() => {

        // console.log('use effect called , call API');
        fetch("http://localhost:8080/doctor/allDoctors")
            .then(res => res.json())
            .then(valueFromAPI => {
                console.log('API DATA CALLED');
                console.log(valueFromAPI);
                setcat(valueFromAPI)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> e617537766bea6fd76ce2329f2db9b00de39d21c
>>>>>>> b68e482f1d0d393f28621c8dcaae5f30d0497f59
            })
        // fetch("http://localhost:8080/login/logintest",{
        //     method: 'POST',
        //     headers:{
        //       'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //       email:email1, password:password1
        //     })
        //   })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data)
        //   });
    }, []);

    var M1 = () => {
        var email = document.getElementById("exampleInputEmail1").value;
        var password = document.getElementById("exampleInputPassword1").value;
<<<<<<< HEAD
        alert(email + " " + password );
=======
<<<<<<< HEAD
        alert(email + " " + password );
=======
        alert(email +" "+ password);
>>>>>>> e617537766bea6fd76ce2329f2db9b00de39d21c
>>>>>>> b68e482f1d0d393f28621c8dcaae5f30d0497f59
        var b = false;
        console.log(b);
        console.log(email);
        console.log(password);

        cat.forEach(element => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b68e482f1d0d393f28621c8dcaae5f30d0497f59
            if (element.email === email && element.password === password) {
                b = true;
                doctor_id = element.doctor_id;
                console.log(doctor_id);
            }
        });

<<<<<<< HEAD
=======
=======
                if (element.email === email && element.password === password) {
                    b = true;
                }
            });
       
>>>>>>> e617537766bea6fd76ce2329f2db9b00de39d21c
>>>>>>> b68e482f1d0d393f28621c8dcaae5f30d0497f59
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
        <div className="container-fluid w-25 p-3 h-100 mt-5 ">

<<<<<<< HEAD
            <form className="form-control-md">
                <h1 className="text-center mb-4 display-5">Login</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" />
<<<<<<< HEAD
=======
=======
            <form class="form-control-md">
                <h1 class="text-center mb-4 display-5">Login</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
>>>>>>> e617537766bea6fd76ce2329f2db9b00de39d21c
>>>>>>> b68e482f1d0d393f28621c8dcaae5f30d0497f59
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-secondary" onClick={M1}>Login</button>
                </div>
            </form>

        </div>


    )
}

