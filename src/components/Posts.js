import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../featureSlice/getTodos/getTodos';



const Posts = () => {
    const { getTodos } = useSelector(state => state.getTodos)

    const dispatch = useDispatch()

    const onCLick = () => {
        dispatch(fetchTodos())
    }

    return (
        <div>
            <button
                onClick={() => onCLick()}
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {getTodos.length > 0 ? getTodos.map(todo => (
                (<PostItem todo={todo} key={todo.id} />)
            )) : null}
        </div>
    )
}

export default Posts
