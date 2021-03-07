import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(item => 
          <Todo 
            key={item.id} 
            {...item} 
            todo={item} 
            todos={todos} 
            setTodos={setTodos}
          ></Todo>)
        }
      </ul>
    </div>
  )
}
