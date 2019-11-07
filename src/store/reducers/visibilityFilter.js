import * as actionTypes from '../actions/action_types'


const initialState = 'All'

function visibilityFilter (state = initialState, action) {
  console.log(222)
  console.log('action.type:', action.type)
  switch (action.type) {
    case actionTypes.SHOW_ALL:
      return 'All'
    case actionTypes.SHOW_ACTIVE:
      return 'Active'
    case actionTypes.SHOW_COMPLETED:
      return 'Completed'
    default:
      return state
  }
}

export default visibilityFilter