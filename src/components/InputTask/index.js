import React, { Component } from 'react';
import {Container} from './style';

export default class InputTask extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      taskName: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      taskName: event.target.value
    })
  };

  handleInputSend = (event) => {
    if( event.keyCode === 13){
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
