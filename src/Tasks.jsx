import React from 'react'
import './css/Tasks.css'
import trash from './assets/trash-solid.svg'

const Tasks = ({task}) => {

  function checkCompleted(event) {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
      listItem.style.textDecoration = "line-through";
      listItem.style.textDecorationLine = "line-through";
      listItem.style.textDecorationStyle = "solid";
      listItem.style.textDecorationColor = "#A0785A"; // Light brown color
      listItem.style.textDecorationThickness = "1px";
      listItem.style.transition = "text-decoration-color 0.5s ease";
      listItem.style.textDecorationColor = "transparent";
      setTimeout(() => {
        listItem.style.textDecorationColor = "#A0785A"; // Light brown color
      }, 200); // Increased delay to make animation more visible
    } else {
      listItem.style.textDecoration = "none";
      listItem.style.transition = "text-decoration-color 0.5s ease";
    }
  }

  

  function deleteTask(event) {
    // Find the parent li element regardless of whether button or img was clicked
    const listItem = event.target.closest('.todoItem');
    listItem.remove();
  }


  return (
      <section className='tasksSection'>
          <header className='listHeader'>YOUR LIST</header>

          <div className='listDisplayDiv'>
        <ul className="todoList">

          {task.map((task, index) => (
             <li className="todoItem">
                <input type="checkbox" className="todoCheckbox" onClick = {(e) => checkCompleted(e)} />
                <span className="todoText">{task}</span>
                <button className="deleteBtn" onClick = {(e)=> deleteTask(e)}>
                  <img src={trash} alt="Delete" />
                </button>
              </li>
            
          ))}
          
             
            </ul>
          </div>
    </section>
  )
}

export default Tasks