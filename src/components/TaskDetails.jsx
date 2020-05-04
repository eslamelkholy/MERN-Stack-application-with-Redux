import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TaskDetails = ({
    id,
    comments,
    task,
    isComplete,
    groups 
})=>(
    <div>
        <h2>
            {task.name}
        </h2>
        <button>Complete / Reopen Task</button>
        <select>
            {groups.map(group => (
                <option value={group.id} key={group.id}>{group.name}</option>
            ))}
        </select>
        <Link to="/dashboard" className="btn btn-success">Done</Link>
    </div>
);

const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return{
        id,
        task,
        groups,
        isComplete:task.isComplete
    }
};

export const ConnectTaskDetails = connect(mapStateToProps)(TaskDetails);
