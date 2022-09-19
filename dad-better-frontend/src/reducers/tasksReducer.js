const tasksReducer = (state = { tasks: [], loading: false }, action) => {
    switch (action.type) {
        case "ADD_TASKS":
            return {
                ...state,
                tasks: action.tasks,
            }
        default:
            return state
    }
}

export default tasksReducer