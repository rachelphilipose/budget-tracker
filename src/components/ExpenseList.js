import React from 'react';
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        {id: 1231232, name: "Shopping", cost: 50},
        {id: 1231232, name: "Fuel", cost: 47},
        {id: 1231232, name: "Rock Climbing", cost: 35.50},
        {id: 1231232, name: "Food", cost: 13.90},
        {id: 1231232, name: "Shopping", cost: 70}
    ];

    return (
        <ul className= 'list-group'>
            {expenses.map(((expense)=>(
                <ExpenseItem id={expense.id} 
                name = {expense.name}
                cost = {expense.cost}/>
            )))}
        </ul>
    );
};

export default ExpenseList