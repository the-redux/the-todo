import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <div
    className={completed ? 'alert alert-success' : 'alert alert-primary'}
    role="alert"
    onClick={onClick}
  >
    {text}
  </div>
);

export default Todo;
