import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

// Container component
// Renders input field and dispatches addTodo action which adds a new Todo task to store

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  // dispatches addTodo action  (adds new task to the store) if inputValue is not empty
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.inputValue.trim()) {
      return;
    }
    this.props.dispatch(addTodo(this.state.inputValue));
    this.setState({ inputValue: '' });
  };
  // each time input value changes it saves it to state as a inputValue
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  // renders input field
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            onChange={this.handleInputChange}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
//  not sure if I'm supposed to use proptypes in such case
AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
//  generates component connected to the Redux store based on AddTodo component defined above
AddTodo = connect()(AddTodo);

export default AddTodo;
