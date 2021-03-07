import React from 'react'

export default function Todo({id, title, date, todo, todos, setTodos}) {

  const completeHandler = e => {
    setTodos(todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }

      return item
    }))
  }

  const deleteTodo = e => {
    setTodos(todos.filter(el => el.id !== id))
  }


  return (
    <div className="todo" key={id}>
      <div className="todo-date">
        {date}
      </div>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{title}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
