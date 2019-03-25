import React, { Component, Fragment } from 'react';
import {HeaderUi} from './style';
import DataAtual from '../../components/DataAtual';
import InputTask from '../../components/InputTask';
import ListTodos from '../../components/ListTodos/';
import LogoUnipe from '../../assets/img/logo_unipe_cruzeiro_02.svg';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <HeaderUi>
          <img src={LogoUnipe} alt="logomarcaa"/>
          <DataAtual />
        </HeaderUi>
        <InputTask />
        <ListTodos />
      </Fragment>
    );
  }
}

export default Main;
