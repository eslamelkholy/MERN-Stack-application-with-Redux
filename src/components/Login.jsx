import React from 'react';
import { connect } from 'react-redux';
import * as mutations from '../store/mutation';

const LoginComponent = ({authenticateUser, authenticated}) =>{
    return <div className="container"><br/>
        <h2>Login Page</h2>
        <form className="col-6" onSubmit={authenticateUser}><br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" name="username" class="form-control"  placeholder="Enter Username" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your Information with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            </form><br/>
            {authenticated === mutations.NOT_AUTHENTICATED ? <div className="alert alert-danger col-5">Invalid Username Or Password </div> : null}
    </div>
};

const mapStateToProps = ({session}) =>({
    authenticated:session.authenticated
});

const mapDishpatchToProps = (dispatch) =>({
    authenticateUser(e){
        e.preventDefault();
        let username= e.target[`username`].value;
        let password= e.target[`password`].value;
        dispatch(mutations.requestAuthenticateUser(username, password));
    }
})

export const ConnectedLogin = connect(mapStateToProps, mapDishpatchToProps)(LoginComponent);