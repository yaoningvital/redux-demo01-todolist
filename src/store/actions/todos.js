import { ADD_TODO, TOGGLE_TODO ,TOGGLE_ALL} from './action_types'

export function addTodo (text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function toggleTodo (id, done) {
  return {
    type: TOGGLE_TODO,
    id,
    done
  }
}

export function toggleAll (allChecked) {
  return {
    type:TOGGLE_ALL,
    allChecked
  }
}