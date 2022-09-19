const tasksReducer = (state = { tasks: [], loading: false }, action) => {
    switch (action.type) {
        case "LOADING_TASKS":
            return {
                ...state, tasks: [...state.tasks],
                loading: true,
            };
        case "ADD_TASKS":
            debugger
            return {
                ...state,
                user: action.tasks.data,
                loading: false
            }
        default:
            return state
    }
}

export default tasksReducer