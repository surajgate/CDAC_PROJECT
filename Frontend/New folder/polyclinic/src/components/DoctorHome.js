import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { doctor_id } from './Doctor';
export default function DoctorHome() {

    document.body.style.backgroundColor = "white";
    const [cat, setcat] = useState([])
    const [abc, setAbc] = useState([])
    const navigate = useNavigate();
    useEffect(() => {

        fetch(`http://localhost:8080/appointment/allAppointment/${doctor_id}`)
            .then(res => res.json())
            .then(valueFromAPI => {
                console.log('API DATA CALLED');
                console.log(valueFromAPI);
                setAbc(valueFromAPI)
            })

        fetch("http://localhost:8080/patient/allPatients")
            .then(res => res.json())
            .then(valueFromAPI => {
                console.log('API DATA CALLED');
                console.log(valueFromAPI);
                setcat(valueFromAPI)
            })
    }, []);

    var M1 = () => {

        abc.forEach(element => {

        });


    }
    return (
        <div>DoctorHome
            <table className='table'>
                {
                    xyz.length > 0 && xyz.map((val) =>
                        <tr>
                            <td>{val._id}</td>
                            <td>{val.name}</td>
                            <td>{val.age}</td>

                        </tr>
                    )
                }
            </table>
        </div>
    )
}
