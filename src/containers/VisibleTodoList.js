import { connect } from 'react-redux';
import { toggleTodo } from '../store/todos/actions';
import TodoList from '../components/TodoList';
import { VisibilityFilter } from '../store/visibilityFilter/actions';
import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;
const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case VisibilityFilter.SHOW_ALL:
        return todos;
      case VisibilityFilter.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      case VisibilityFilter.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
    }
  }
);

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
