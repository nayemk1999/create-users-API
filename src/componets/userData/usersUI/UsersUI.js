import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Cart from '../../Cart/Cart';
import Users from '../users/Users';
import './UsersUI.css';

const UsersUI = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/83e0f379')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error))
    }, [])

    const [addUser, setUser] = useState([])
    const usersAdd = (props) => {
        const newUser = [...addUser, props]
        setUser(newUser)
    }
    return (
        <div className='users-part'>
            <div className='user-body'>
                {
                    users.map(user => <Users
                        users={user}
                        key={user.id}
                        usersAdd={usersAdd}
                    ></Users>)
                }
            </div>
            <div>
                <Cart addUser={addUser}></Cart>
            </div>

        </div>
    );
};

export default UsersUI;