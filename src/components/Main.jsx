import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './layouts/AppNavBar';
import { ConnectTaskDetails } from './TaskDetails';

export const Main = () =>(
    <Router history={history}>
        <Provider store={store} >
            <div>
                <ConnectedNavigation/>
                <Route 
                    exact 
                    path="/dashboard" 
                    render={() => (<ConnectedDashboard/> )} 
                />
                <Route 
                    exact
                    path="/task/:id"
                    render= {({match}) => ( <ConnectTaskDetails match={match} /> )}
                />
            </div>
        </Provider>
    </Router>
)