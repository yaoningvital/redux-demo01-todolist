import React from 'react'
import TodoItem from './TodoItem'
import { isAllChecked } from '../utils'
import { allFilters } from '../store/actions/visibilityFilter'

function AddTodo ({todos, addTodo, toggleTodo, toggleAll, visibilityFilter}) {
  // console.log('todos 1:', todos)
  // console.log('visibilityFilter:', visibilityFilter)
  let allChecked = isAllChecked(todos)
  let filterTodos = todos.filter(allFilters[visibilityFilter])
  // console.log('allFilters[visibilityFilter]:', allFilters[visibilityFilter])
  // console.log('todos 2:', todos)
  // console.log('filterTodos:', filterTodos)
  return (
    <div>
      <input type="checkbox" checked={allChecked} onChange={() => toggleAll(!allChecked)}/>
      <input type="text" placeholder="请输入要添加的事项" onKeyUp={addTodo}/>
      <section>
        <ul>
          {filterTodos.map(todo => (
            <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo}/>
          ))}
        </ul>
      </section>
    </div>
  )
}


export default AddTodo