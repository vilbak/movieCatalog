import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Navbar from "./components/navbar/navbar"
import Landing from "./components/layout/layout"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import PrivateRoute from "./PrivateRoute"
import Films from "./components/filmList/Films"

const AppRouter = () =>{
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
             <Route exact path ="/" component ={Landing}/>
             <Route exact path = "/register" component = {Register} />
             <Route exact path = "/login" component = {Login}/>
             <PrivateRoute exact path = "/films" component = {Films}></PrivateRoute> 
             </Switch>
            </Router>
            
    )
}

export default AppRouter