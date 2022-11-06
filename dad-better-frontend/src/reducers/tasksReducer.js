const tasksReducer = (state = { tasks: [], requesting: false }, action) => {
    switch (action.type) {
        case "START_ADDING_TASKS":
            return {
                ...state,
                tasks: [...state.tasks],
                requesting: true,
            }

        case "ADD_TASKS": 
        return {
                ...state,
                tasks: action.tasks,
                requesting: true,
            }

        default:
            return state
    }
}

export default tasksReducer