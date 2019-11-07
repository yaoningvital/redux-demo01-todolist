import React from 'react'
import { allFilters } from "../store/actions/visibilityFilter";

function Footer ({visibilityFilter, toggleShow}) {
  return (
    <section>
      <br/>
      <br/>
      {Object.keys(allFilters).map(filter => (
        <span key={filter} className={filter === visibilityFilter ? 'active-filter' : ''}>
            <a href={'#/' + filter} style={{marginRight: '20px', cursor: 'pointer'}}
               onClick={() => toggleShow(filter)}>{filter}</a>
          </span>
      ))}
    </section>
  )
}

export default Footer