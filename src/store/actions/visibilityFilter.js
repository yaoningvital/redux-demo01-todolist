import * as actionsType from './action_types'

export const allFilters = {
  'All': todo => todo,
  'Active': todo => !todo.done,
  'Completed': todo => todo.done
}


export function showAll () {
  return {
    type: actionsType.SHOW_ALL,
  }
}

export function showActive () {
  console.log('showActive')
  return {
    type: actionsType.SHOW_ACTIVE
  }
}

export function showCompleted () {
  return {
    type: actionsType.SHOW_COMPLETED
  }
}

