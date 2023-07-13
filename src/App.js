import TodoApp from './components/TodoApp';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
