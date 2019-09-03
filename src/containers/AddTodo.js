import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/todos/actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} type="text" className="form-control" />
        <button type="submit" className="btn btn-primary ml-2">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
