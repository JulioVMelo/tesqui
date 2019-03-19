import React, { Component } from 'react';
import Main from './pages/Main';
import GlobalStyle from './assets/css/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Main />
      </Provider>
    );
  }
}

export default App;
