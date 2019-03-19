import React, { Component } from 'react';
import {Container} from './style';
class InputTask extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      taskName: '',
      listTaskName: []
    };
  }

  handleInputChange = (event) => {
    this.setState({
      taskName: event.target.value
    })
  };

  handleInputSend = (event) => {
    if( event.keyCode === 13){
      this.setState({listTaskName: this.state.listTaskName.concat(this.state.taskName)});
    }
  };

  render() {
    return (
      <Container>
        <input 
          type="text" 
          placeholder="Escreva aqui uma tarefa..." 
          value={this.state.taskName}
          onChange={this.handleInputChange} 
          onKeyDown={this.handleInputSend}
        />
      </Container>
    );
  }
};


export default InputTask;
