export const isAllChecked = (todos) => {
  return todos.every((todo) => {
    return todo.done === true
  })
}