const usersReducer = (state = { user: [], loading: false }, action) => {
    switch (action.type) {
        
        case "SET_USER":
            return { ...state, user: [action.payload.user] }

        case "UPDATE_SCORE":
            const updatedUser = state
            updatedUser.user[0].data.attributes.score = action.payload.user.data.attributes.score
            return { ...state, updatedUser}

        case "UPDATE_TASK":
            debugger
            return true

        case "LOGOUT":
            return { ...state, user: [] }

        default:
            return state
    }
}

export default usersReducer