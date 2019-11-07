import React from 'react';
import AddTodoContainer from './containers/AddTodoContainer'
import FooterContainer from "./containers/FooterContainer";
import './App.css'

function App () {
  return (
    <div className="App">
      <AddTodoContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
