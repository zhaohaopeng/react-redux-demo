import React from 'react';
import './App.css';
import { routes, createRotes } from './routes'

function App() {
  return (
    <div className="App">
      {createRotes(routes)}
    </div>
  );
}

export default App;
