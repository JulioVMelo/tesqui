import React, { Component, Fragment } from "react";
import { HeaderUi } from "./style";
import DataAtual from "../../components/DataAtual";
import InputTask from "../../components/InputTask";
import ListTodos from "../../components/ListTodos/";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <HeaderUi>
          <h3>Task App</h3>
          <DataAtual />
        </HeaderUi>
        <InputTask />
        <ListTodos />
      </Fragment>
    );
  }
}

export default Main;
