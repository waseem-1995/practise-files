import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

//  returns todos to be displayed depending on current set filter
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

//  returns object with state to be passed as a prop
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

//  wraps toggleTodo action in a dispatch and passes it as a onTodoClick prop
const mapDispatchToProps = {
  onTodoClick: toggleTodo,
};


//  returns a new TodoList component connected to redux store
//  with toggleTodo action wrapped in a dispatch passed as a onTodoClick
//  and filtered todos list passed as a todos
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
