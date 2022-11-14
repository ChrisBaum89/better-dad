import React, { useEffect } from 'react';
import TaskList from '../components/TaskList';
import '../css/Tasks.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../actions/taskActions';

function TaskContainer(props) {

    const dispatch = useDispatch()

    return (
        <div>
            <div class="task-title">
                <h2>Tasks</h2>
            </div>
            <TaskList userAssignedTasks={props.userAssignedTasks} />
        </div>
    )
}

export default TaskContainer