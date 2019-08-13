import React from 'react';
//import './App.css';
//import Navbar from './components/layout/NavbarHeader';
import SideBar from './components/layout/Sidebar';
import AppBar from './components/layout/Appbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    // <div className="App">
    <Provider store={store}>
      <Router>
        <div className="container">
          <AppBar />
          {/* <SideBar /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
