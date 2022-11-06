import React, { useEffect } from 'react';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';

function TaskContainer(props) {

    const assignedTasks = useSelector((state) => state.usersReducer.user[0].included)
    const allTasks = useSelector((state) => state.tasksReducer.tasks)
    const dispatch = useDispatch()


    const getAssignedTaskIds = (assignedTasks) => {
        return assignedTasks.map(task => task.attributes.task_id)
    }

    const getTaskInfo = (allTasks, assignIds) => {
        const foundTasks = []
        for (let i = 0; i < allTasks.length; i++) {
            if (assignIds.includes(parseInt(allTasks[i].id))) {
                foundTasks.push(allTasks[i])
            }
        }
        return foundTasks
    }

    const getAssignedTaskData = (assignedTasks, allTasks) => {
        return getTaskInfo(allTasks, getAssignedTaskIds(assignedTasks))
    }

    const getData = async () => {
        const response = await fetch("http://localhost:3000/tasks");
        const tasks = await response.json();
        return tasks;
    };

    getData().then((data) => {
        dispatch({ type: "ADD_TASKS", tasks: data.data })
    })

    const userTasks = getAssignedTaskData(assignedTasks, allTasks)


    return (
        <div>
            <TaskList tasks={userTasks} />
        </div>
    )
}

export default TaskContainer