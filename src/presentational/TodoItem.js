import React from 'react'

function TodoItem ({todo, toggleTodo}) {
  let className = ''
  if (todo.done) {
    className += 'done'
  }
  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id, !todo.done)}/>
      <span className={className}>{todo.text}</span>
    </li>
  )
}

export default TodoItem