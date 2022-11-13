const usersReducer = (state = { user: [], loading: false }, action) => {
    switch (action.type) {
        
        case "SET_USER":
            return { ...state, user: [action.payload] }

        case "UPDATE_USER":
            return {...state, user: [action.payload]}

        case "LOGOUT":
            return { ...state, user: [] }

        default:
            return state
    }
}

export default usersReducer