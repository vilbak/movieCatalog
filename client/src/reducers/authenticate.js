import {AUTH_USER_START,AUTH_USER_LOADING,AUTH_USER_END,LOGOUT,LOGIN_SUCCESS} from '../actions/types'
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
    const{type} = action
    switch(type){
        case AUTH_USER_START:
            return {...state,userData:action.payload,isAuthenticated:false}
        case AUTH_USER_LOADING: 
            return {...state, loading: true,isAuthenticated:false}
        case AUTH_USER_END: 
            return {...state, loading: false,isAuthenticated:false}
        case LOGIN_SUCCESS:
            return{...state,isAuthenticated:true}
        case LOGOUT:
            localStorage.removeItem('token')
            return{...state,token:null,isAuthenticated:false,loading:false,userData:{}}

        default:
            return state;
    }
}