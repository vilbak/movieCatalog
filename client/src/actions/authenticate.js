import {AUTH_USER_START,AUTH_USER_LOADING,AUTH_USER_ERROR,AUTH_USER_END,LOGGED_IN_USER,LOGIN_SUCCESS} from './types'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthToken'

export const registerUser =  (userData, history) => async dispatch => {
    dispatch({type:AUTH_USER_START, payload:userData})
    dispatch({type:AUTH_USER_LOADING })
    try {
        const response = await axios.post("user/register", userData)
        history.push("/login")
        dispatch({type: AUTH_USER_END, payload: response.data})
        console.log({response})
    } catch (error) {
        console.log(error)
  }
}
  
export const loginUser = (userData, history) => dispatch  => {
    axios
      .post('user/login', userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        console.log(res.data)
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
               history.push("/films")
        dispatch(loginSuccess(decoded));
      })
      .catch(err =>
        dispatch({
          type: AUTH_USER_END,
          payload: err.response.data
        })
      );
  };
  
  // Set logged in user
  export  const loginSuccess = decoded => {
    return {
      type: LOGIN_SUCCESS,
      payload: decoded
    };
  };
  
  // Log user out
  export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(loginSuccess({}))
  }