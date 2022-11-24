import React from 'react';
import TaskList from '../components/TaskList';
import '../css/Tasks.css'

function TaskContainer(props) {
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