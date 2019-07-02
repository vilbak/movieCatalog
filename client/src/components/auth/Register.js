import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import{registerUser} from '../../actions/authenticate'


class Register extends React.Component{
  constructor(){
    super()
    this.state ={
      name:'',
      email:'',
      password:'',
      password2:'',
      errors:''
    }
    
    
  }
  onChange =(e) =>{
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit=(e)=>{
    e.preventDefault()

     const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history)

   
  }
   

  render() {
    

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Let's dive in!</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", 
                      
                    )}
                    placeholder="Name"
                    name="name"
                    value ={this.state.name}
                    onChange={this.onChange} 
                   
                  />
                 
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", 
                    
                    )}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    
                  />
                  
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want to have a  profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg"
                      
                    )}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    
                  />
                  
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", 
                     
                    )}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    
                  />
                 
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
    auth:state.auth,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    registerUser: userData=>dispatch (registerUser(userData))

  }
}

export default connect(mapStateToProps,{registerUser})(withRouter(Register))