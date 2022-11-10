import React, { useEffect } from 'react';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../actions/taskActions';

function TaskContainer(props) {

    const dispatch = useDispatch()

    return (
        <div>
            <TaskList userAssignedTasks={props.userAssignedTasks} />
        </div>
    )
}

export default TaskContainer