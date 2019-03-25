import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ListItem } from './style';
import * as TodoActions from '../../store/actions/todos';
import { bindActionCreators } from 'redux';
import btnRemove from '../../assets/img/delete.svg';

class ListTodos extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <ul>
          { this.props.todos.map( todo => 
            <ListItem key={ todo.id }> 
              <div>
                <span> { todo.text } </span>
                <input type="checkbox" />
              </div>
              <img src={ btnRemove } alt="excluir" onClick={() => this.props.removeTodo(todo.id)} />
            </ListItem> 
          )}
        </ul>
      </Container>
    );
  }
}

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
