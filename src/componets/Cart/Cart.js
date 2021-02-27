import React from 'react';

const Cart = (props) => {
    const addUser = props.addUser

    const totalSalary = addUser.reduce((sum, userSalary) => {
        return sum + userSalary.salary
    }, 0);

    console.log(totalSalary);
    return (
        <div>
            <h1>Users Add to Cart</h1>
            <h2>User Added: {addUser.length}</h2>
            <h2>Salary: ${totalSalary}</h2>
        </div>
    );
};

export default Cart;