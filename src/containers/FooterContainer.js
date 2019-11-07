import Footer from '../presentational/Footer'

import { connect } from 'react-redux'
import { showActive, showAll, showCompleted } from "../store/actions/visibilityFilter";

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShow: (filter) => handleToggleShow(dispatch, filter)
  }
}

const handleToggleShow = (dispatch, filter) => {
  console.log('filter:', filter)
  if (filter === 'All') {
    dispatch(showAll())
  } else if (filter === 'Active') {
    dispatch(showActive())
  } else if (filter === 'Completed') {
    dispatch(showCompleted())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)