import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ListItem, BtnRemove } from './style';
import * as TodoActions from '../../store/actions/todos';
import { bindActionCreators } from 'redux';
import btnRemove from '../../assets/img/delete.svg';

const ListTodos = ( {todos,removeTodo, alterState} ) => (
  <Container>
    <ul>
      { todos.map( todo => 
        <ListItem className={todo.completed ? 'completed' : ''} key={ todo.id }> 
          <div>
            <span> { todo.text } </span>
            <input type="checkbox" onChange={() => alterState(todo.id, todo.completed, todo.text)} />
          </div>
          <BtnRemove src={ btnRemove } alt="excluir" onClick={() => removeTodo(todo.id)} />
        </ListItem> 
      )}
    </ul>
  </Container>
);

ListTodos.propTypes = {
  alterState: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
