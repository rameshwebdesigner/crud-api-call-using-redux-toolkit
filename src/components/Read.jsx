import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction } from '../slices/userDetailSlice';

const Read = () => {
    const dispatch = useDispatch();

    // Access the users and loading state from the Redux store
    const { users, loading, error } = useSelector((state) => state.userDetail);

    useEffect(() => {
        // Dispatch the fetchUsersAction when the component mounts
        dispatch(fetchUsersAction());
    }, [dispatch]);

    if (loading === "loading") return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className='container mt-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">age</th>
                            <th scope="col">Gendar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) =>
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.gendar}</td>

                            </tr>)}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Read