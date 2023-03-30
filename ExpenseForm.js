import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

//    const [userInput, setUserInput] = useState({
//         enteredTitle:'',
//         enteredAmount:'',
//         enteredDate:'',
//     });
    const titleChangeHandler = (Event) => {
        // setEnteredTitle(Event.target.value);
//         setUserInput({
//             ...userInput,
//             enteredTitle: Event.target.value,
//     })
// };
setUserInput((prevState) => {
    return {...prevState, enteredTitle: Event.target.value};
});
    };
    const amountChangeHandler = (Event) => {
        // setEnteredAmount(Event.target.value);
//         setUserInput({
//             ...userInput,
//             enteredAmount: Event.target.value,
//     })
// };
//     };
setUserInput((prevState) => {
    return {...prevState, enteredAmount: Event.target.value};
});
    };
    const dateChangeHandler = (Event) => {
        // setEnteredDate(Event.target.value);
//         setUserInput({
//             ...userInput,
//             enteredDate: Event.target.value,
//     })
// };
setUserInput((prevState) => {
    return {...prevState, enteredDate: Event.target.value};
});
    };
    
  const submitHandler = (Event) => {
    Event.preventDefault();
    const expenseData = {
        title: enterdTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
  };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text'  onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};
export default ExpenseForm;