/* eslint-disable no-unused-expressions */
import React from 'react'
import {Redirect, Route} from "react-router-dom"

 const PrivateRoute = ({component:Component,...rest}) => {
    return <Route
     {...rest}
     render={props=>
        localStorage.getItem('jwtToken')?(
            <Component {...props} />
        ):(
            <Redirect
            to= {{
                pathname:'/login',
                state:{from:props.location}
            }}
            />
        )
    }
   />
}

export default PrivateRoute;
