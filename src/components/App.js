import React from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <h4>Todo App</h4>
        <AddTodo />
        <VisibleTodoList />
        <Footer/>
      </div>
    </div>
  </div>
)

export default App;
