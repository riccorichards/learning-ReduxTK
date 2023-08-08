import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodos } from '../featureSlice/todoSlice/todoSlice';
const Form = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = () => {
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            complete: false
        }
        dispatch(addTodos(newTodo))
        setInputValue("")
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
                value={inputValue}
                onChange={inputHandler}
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={() => addTodoHandler()}
            >
                Submit
            </button>
        </form>
    )
}

export default Form
