import React from 'react';
import { connect } from 'react-redux';
import { CREATE_TODO } from './store/reducer';
import TodoList from './TodoList';
import './App.css';

class App extends React.Component {

  state = {
    title: ''
  };

  inputHandler = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="App" >
        <div>
          <h1>Todo App</h1>
        </div>
        <div>
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              name="title"
              value={title}
              autoComplete="off"
              onChange={this.inputHandler}
            />
            <button
              type='submit'
              disabled={!title}
            >Add</button>
          </form>
        </div>
        <TodoList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (title) => dispatch({ type: CREATE_TODO, payload: title })
  };
};

export default connect(null, mapDispatchToProps)(App);