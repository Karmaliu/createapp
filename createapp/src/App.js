import React, { Component } from 'react';
import logo from './images/logo.svg';
import styles from  './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
