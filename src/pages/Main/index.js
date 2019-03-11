import React, { Component, Fragment } from 'react';
import {HeaderUi, Logo} from './style';
import DataAtual from '../../components/DataAtual';
import InputTask from '../../components/InputTask';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <HeaderUi>
          <Logo>Tesqui - globoesporte</Logo>
          <DataAtual />
        </HeaderUi>
        <InputTask />
      </Fragment>
    );
  }
}

export default Main;
