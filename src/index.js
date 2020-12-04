import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { RouteList } from './RouteList';
import "antd/dist/antd.css";

export default class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <RouteList />
      </React.StrictMode>
    )
  }
}


render(<App />, window.document.getElementById('root'));