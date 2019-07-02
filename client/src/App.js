/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react';
import AppRouter from './AppRouter'
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Footer from './components/footers/Footer'

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <AppRouter />
      <Footer/>
      </Provider>
    )
  }
}

export default App;