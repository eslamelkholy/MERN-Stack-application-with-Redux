import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './layouts/AppNavBar';
import { ConnectTaskDetails } from './TaskDetails';
import { ConnectedLogin } from './Login';

// Route Guard
const RouteGuard = Component => ({match}) =>{
    console.log("Route Guard", match);
    if(!store.getState().session.authenticated){
        return <Redirect to="/" />
    }else{
        return <Component match={match} />
    }
    
}

export const Main = () =>(
    <Router history={history}>
        <Provider store={store} >
            <div>
                <ConnectedNavigation/>
                <Route 
                    exact
                    path="/"
                    render={()=> (<ConnectedLogin/>)}
                />
                <Route 
                    exact 
                    path="/dashboard" 
                    render={RouteGuard(ConnectedDashboard)} 
                />
                <Route 
                    exact
                    path="/task/:id"
                    render= {RouteGuard(ConnectTaskDetails)}
                />
            </div>
        </Provider>
    </Router>
)