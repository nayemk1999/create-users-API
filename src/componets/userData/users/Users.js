import React from 'react';
import './Users.css'

const Users = (props) => {
    const {name, image, salary, country} = props.users;
    const usersAdd = props.usersAdd
    return (
        <div className='users-information'>
            <div className='users-image'>
                <img src={image} alt="" />
            </div>
            <div className='users-description'>
                <h2>Name: {name}</h2>
                <h3>Country: {country}</h3>
                <h3>Salary: {salary}</h3>
                <button onClick={() => usersAdd(props.users)}>Add Users</button>
            </div>
        </div>

    );
};

export default Users;