import React, { Component } from 'react';
import {Container} from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

class InputTask extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
  }

  handleSend = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.taskName);
    this.setState( {taskName: ''});
  };

  render(){
    return(
      <Container>
        <form onSubmit={this.handleSend}>
          <input 
              type="text" 
              placeholder="Escreva aqui uma tarefa..." 
              value={this.state.taskName}
              onChange={e => this.setState({taskName: e.target.value})}
          />
        </form>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputTask);
