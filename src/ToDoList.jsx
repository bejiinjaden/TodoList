import React from 'react'
import { useState, useEffect } from 'react'
import Tasks from './Tasks'
import AddTodo from './AddTodo'
import './ToDoList.css'

const ToDoList = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompleted = localStorage.getItem('completedTasks')
    return savedCompleted ? JSON.parse(savedCompleted) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
  }, [completedTasks])

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleTaskCompletion(taskIndex, isCompleted) {
    setCompletedTasks(prev => {
      const newCompleted = [...prev]
      if (isCompleted) {
        newCompleted.push(taskIndex)
      } else {
        const index = newCompleted.indexOf(taskIndex)
        if (index > -1) {
          newCompleted.splice(index, 1)
        }
      }
      return newCompleted
    })
  }

  return (
    <div className="todo-container">
      <AddTodo onAddTask={addTask} />
      <Tasks 
        task={tasks} 
        completedTasks={completedTasks}
        onTaskCompletion={handleTaskCompletion}
      />
    </div>
  )
}

export default ToDoList