import React, { Component } from "react";
import { Provider } from "react-redux";
import { initStore } from "./store/store";
import App from "./App";

const store = initStore();

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Home;
