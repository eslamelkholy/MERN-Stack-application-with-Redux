import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({groups})=>(
    <div>
        <h2>Dashboard</h2>
        <ul>
            {groups.map((group) =>
                <ConnectedTaskList key={group.id} id={group.id} name = {group.name} />
            )}
        </ul>
    </div>
);

function mapStateToProps(state){
    return{
        groups: state.groups
    }
}

// Injected Dashboard Here
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)