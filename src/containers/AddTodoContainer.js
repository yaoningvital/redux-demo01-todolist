import { connect } from 'react-redux'
import AddTodo from "../presentational/AddTodo";
import { addTodo, toggleAll, toggleTodo } from '../store/actions/todos'


const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (e) => handleAddTodo(dispatch, e),
  toggleTodo: (id, done) => handleToggleTodo(dispatch, id, done),
  toggleAll: (allChecked) => handleToggleAll(dispatch, allChecked),
})

const handleAddTodo = (dispatch, e) => {
  if (e.keyCode === 13 && e.target.value.trim()) {
    dispatch(addTodo(e.target.value.trim()))
    e.target.value = ''
  }
}

const handleToggleTodo = (dispatch, id, done) => {
  dispatch(toggleTodo(id, done))
}

const handleToggleAll = (dispatch, allChecked) => {
  dispatch(toggleAll(allChecked))
}



export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
