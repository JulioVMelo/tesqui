import React, { Component } from 'react';
import {Container} from './style';

export default class InputTask extends Component {
  
  state = {
    title: "",
  }
  
  handleInputChange = (e) => {
    this.setState({ title: e.target.title }); 
  };
  
  render() {
    return (
      <Container>
        <input type="text" placeholder="Escreva aqui uma tarefa..." onChange={this.handleInputChange} value={this.setState.title}/>
      </Container>
    );
  }
};
