/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react';
import AppRouter from './AppRouter'
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import Footer from './components/footers/Footer'
import setAuthToken from "./utils/setAuthToken"
import {loginSuccess, logoutUser} from "./actions/authenticate"


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(loginSuccess(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "/login";
  }
}


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