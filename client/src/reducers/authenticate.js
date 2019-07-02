import {AUTH_USER_START,AUTH_USER_LOADING,AUTH_USER_END,AUTH_USER_ERROR,LOGGED_IN_USER,LOGIN_SUCCESS} from '../actions/types'
const initialState = {
    userData:{
        name:'',
        email:'',
        password:'',
        password2:'',
    },
    token:localStorage.getItem('token'),
    loading: false,
    isAuthenticated:false
}

export default function(state = initialState, action){
    const{type,payload} = action
    switch(type){
        case AUTH_USER_START:
            return {...state,userData:action.payload,isAuthenticated:false}
        case AUTH_USER_LOADING: 
            return {...state, loading: true,isAuthenticated:false}
        case AUTH_USER_END: 
            return {...state, loading: false,isAuthenticated:true}
        case LOGIN_SUCCESS:
            return{...state,isAuthenticated:true}
        default:
            return state;
    }
}