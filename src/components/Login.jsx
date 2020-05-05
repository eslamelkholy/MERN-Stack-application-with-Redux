import React from 'react';
import { connect } from 'react-redux';

const LoginComponent = () =>{
    return <div className="container"><br/>
        <h2>Login Page</h2>
        <form className="col-6"><br/>
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
            </form>
    </div>
};

const mapStateToProps = state => state;

export const ConnectedLogin = connect(mapStateToProps)(LoginComponent);