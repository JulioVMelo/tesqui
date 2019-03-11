import React, { Component, Fragment } from 'react';
import Main from './pages/Main';
import GlobalStyle from './assets/css/GlobalStyle';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Main />
      </Fragment>
    );
  }
}

export default App;
