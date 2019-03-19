import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ListTodos = ({todos, addTodo}) => {
  return(
    <Fragment>
      <ul>
        { todos.map( todo => <li key={todo.id}>{todo.text}</li> ) }
      </ul>
      <button onClick={() => addTodo('novo Todo')} >novo todo</button>
    </Fragment>
  );
};

ListTodos.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: 'ADD_TODO', payload: { text } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
