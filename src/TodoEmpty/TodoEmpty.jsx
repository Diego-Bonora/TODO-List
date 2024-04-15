import React from 'react'
import { ReactComponent as Arrow } from './rightArrow.svg'
import './TodoEmpty.css'

function TodoEmpty() {


    return (
        <div className='EmptyTodos-container'>
            <h1 className='EmptyTodos-message'>There are no TODOs created</h1>
            <div className="Arrow-container">
                <div className="Arrow-movement">
                    <Arrow className="Arrow" />
                </div>
            </div>
        </div >
    );
}

export { TodoEmpty };