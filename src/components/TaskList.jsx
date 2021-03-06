import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestTaskCreation } from '../store/mutation';

export const TaskList = ({tasks, name, id, createNewTask}) =>(
    <div>
        {name}
        <ul>
            {tasks.map(task =>
                <li key={task.id}>
                    <Link to={`/task/${task.id}`}>
                        {task.name}
                    </Link>
                </li>
            )}
        </ul>
        <button onClick={()=> createNewTask(id)} className="btn btn-info">Add New Task</button>
    </div>
)
const mapStateToProps = (state, ownProps) =>{
    let groupID = ownProps.id;
    return{
        name:ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
};

// Inject the CreateNewTask in my Component
const mapDishpatchToProps = (dispatch, ownProps) =>{
    return{
        createNewTask(id){
            dispatch(requestTaskCreation(id));
        }
    }
}
export const ConnectedTaskList = connect(mapStateToProps, mapDishpatchToProps)(TaskList);