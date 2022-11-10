const usersReducer = (state = { user: [], loading: false }, action) => {
    switch (action.type) {
        
        case "SET_USER":
            return { ...state, user: [action.payload.user] }

        case "UPDATE_USER":
            return {...state, user: [action.payload.user]}

        case "LOGOUT":
            return { ...state, user: [] }

        default:
            return state
    }
}

export default usersReducer