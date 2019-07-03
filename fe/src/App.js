import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header.js';
import AppRouter from './router/router.js';
import { getMedia } from './components/api';
import './App.css';

class App extends Component {
  componentDidMount() {
    getMedia();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </Router>
    );
  }
}
export default App;
