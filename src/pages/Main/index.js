import React, { Component, Fragment } from 'react';
import {HeaderUi, Logo} from './style';
import DataAtual from '../../components/DataAtual';
import InputTask from '../../components/InputTask';
import ListTodos from '../../components/ListTodos/';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <HeaderUi>
          <Logo>Tesqui</Logo>
          <DataAtual />
        </HeaderUi>
        <InputTask />
        <ListTodos />
      </Fragment>
    );
  }
}

export default Main;
