export const fetchTasks = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' });
        fetch("http://localhost:3000/tasks")
            .then((response) => { return response.json() })
            .then((responseJSON) => { dispatch({ type: "ADD_TASK", tasks: responseJSON })})
    }
}

