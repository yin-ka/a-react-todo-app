import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import TodoApp from './components/TodoApp';

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
