import React from 'react'
import './css/AddTodo.css'
import crown from './assets/crown-solid.svg'
import { useState } from 'react'

const AddTodo = ({onAddTask}) => {
    const [task, setTask] = useState('')

    function handleSubmit(e) {
        // If the input is empty, don't do anything
        if (task.trim() === '') return
        
        // Add the new task
        onAddTask(task)
        
        // Clear the input
        setTask('')
    }

    return (
        <section className='addSection'>
            <header className='addHeader'>
                Todo List
            </header>

            <div className='addInputDiv'>
                <input 
                    className='addInput'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSubmit(e)
                    }}
                    type='text' 
                    placeholder='Add tasks!' 
                />
            </div>
            <div className="designDiv">
                <p>YOU CAN DO IT</p>
                <p>ONE STEP AT A TIME</p>
                <p>NEW TASK?</p>
                <img src={crown} className='crownPic' alt="crown"/>
            </div>
            <div className='borderalike'></div>
        </section>
    )
}

export default AddTodo