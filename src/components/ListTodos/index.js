import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './style';
import * as TodoActions from '../../store/actions/todos';
import { bindActionCreators } from 'redux';

const ListTodos = ({todos, removeTodo}) => (
    <Container>
      <ul>
        { todos.map( todo => <li key={todo.id}>{todo.text} <span onClick={() => removeTodo(todo.id)}>&times;</span></li> ) }
      </ul>
    </Container>
);

ListTodos.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
