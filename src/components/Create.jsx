import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserAction } from "../slices/userDetailSlice"

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const userInfo = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUserAction(user));
        navigate("/read");
    }
    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="test" className="form-control" placeholder="Enter Your Name" name="name" onChange={userInfo} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={userInfo} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" placeholder="Age" name="age" onChange={userInfo} />
                    </div>
                    <div className='mb-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="age" value="male" onChange={userInfo} />
                            <label className="form-check-label" >
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="age" value="female" onChange={userInfo} />
                            <label className="form-check-label" >
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type='submit' className='btn btn-success' >Create</button>
                    </div>

                </form >
            </div >
        </>
    )
}

export default Create