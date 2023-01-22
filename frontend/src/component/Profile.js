import React, { useEffect, useState } from 'react'
import './Profile.css'
import report from '../images/report.png';
import user from '../images/user.png';
import tracking from '../images/tracking.png';
import { useNavigate } from 'react-router-dom';
const Profile = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        age: ' ',
        city: '',
        state: ''
    });

    const callAboutPage = async () => {
        try {
            const res = await fetch('about', {
                method: 'GET',
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            console.log(data);
            setUser(data);

            if (!res.status === 200) {
                throw new Error(res.error);
            }

        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <div className='Profile'>
                <div className='user'>
                    <img className='user-img' src={user} />
                    <div className='user-data'>
                        {/* <input className='form-field'type="text"placeholder="Name"/>
        <input className='form-field'type="text"placeholder="City"/>
        <input className='form-field' type="text"placeholder="State"/>
        <input className='form-field' type="number" placeholder="Age"/>
    <textarea className='form-field' placeholder='Enter Your Medical History'/>*/}
                        <div className='fields'>Name : {user.name}</div>
                        <div className='fields'>Age : {user.age}</div>
                        <div className='fields'>Email : {user.email}</div>
                        <div className='fields'>City : {user.city}</div>
                        <div className='fields'>State: {user.state}</div>
                        {/* <button className='save'>Save</button>  */}
                    </div>
                </div>
                <div className='other-details'>


                    <div className='old-reports'>
                        <h2 className='report-heading'>Old Reports</h2>
                        <img className='report-img' src={report} />
                        <button className='report-view'>View More</button>
                    </div>
                    <div className='track-health'>
                        <h2 className='track-heading'>Track & Monitor Health</h2>
                        <img className="track-img" src={tracking} />
                        <button className='track-view'>View More</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Profile