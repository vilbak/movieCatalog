import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Navbar from "./components/navbar/navbar"
import Landing from "./components/layout/layout"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Footer from './components/footers/Footer'
const AppRouter = () =>{
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
             <Route exact path ="/" component ={Landing}/>
             <Route exact path = "/register" component = {Register} />
             <Route exact path = "/login" component = {Login}/> 
             </Switch>
            </Router>
            
    )
}

export default AppRouter