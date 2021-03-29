import React, { Component } from "react";
import Apple from './components/Apple';
import { Provider } from 'mobx-react'
import store from "./stores/appleStore";

class App extends Component {
  render() {
    return (
      <Provider apple={store}>
        <Apple />
      </Provider>
    );
  }
}

export default App;
