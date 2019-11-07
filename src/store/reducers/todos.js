import * as actionsType from '../actions/action_types'

const initialState = []

let todoId = 0

function todos (state = initialState, action) {
  console.log(111)
  switch (action.type) {
    case actionsType.ADD_TODO:
      return [
        ...state,
        {id: todoId++, text: action.text, done: false}
      ]
    case actionsType.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, done: action.done}
        }
        return todo
      })
    case actionsType.TOGGLE_ALL:
      return state.map(todo => ({...todo, done: action.allChecked}))
    default:
      console.log(333)
      return state
  }
  
}

export default todos