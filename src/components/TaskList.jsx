import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) =>(
    <div>
        {name}
        <ul>
            {tasks.map(task =>
                <li>
                    <Link to={`/task/${task.id}`} key={task.id}>
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
            console.log("Creating New Task...",id);
        }
    }
}
export const ConnectedTaskList = connect(mapStateToProps, mapDishpatchToProps)(TaskList);