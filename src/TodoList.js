import React from 'react';
import { connect } from 'react-redux';
import { DELETE_TODO } from './store/reducer';

const TodoList = (props) => {
  const { todos, dispatch } = props;

  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  };

  return (
    <div>
      <ul>
        {
          todos.map((todo, idx) => {
            return (
              <li onClick={() => deleteTodo(todo.id)} key={idx}>
                {todo.title}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps)(TodoList); 