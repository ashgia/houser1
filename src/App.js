import React, { Component } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <HashRouter>
            <div className="App">
              <Header />
              {routes}
            </div>
          </HashRouter>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
