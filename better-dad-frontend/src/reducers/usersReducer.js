const usersReducer = (state = { user: [], requesting: false }, action) => {
    switch (action.type) {
        case "INITIALIZE":
            const userArray = { message: "NO USER" }
            localStorage.jwt = ''
            return { ...state, user: [userArray], requesting: false }

        case "UPDATE_USER":
            localStorage.setItem("jwt", action.payload.jwt)
            return { ...state, user: [action.payload], requesting: false }

        case "LOGIN_USER":
            localStorage.setItem("jwt", action.payload.jwt)
            return {
                ...state,
                user: [action.payload],
                requesting: false,
            }

        case "START_USER_REQUEST":   
        return {
                ...state, user: [...state.user],
                requesting: true,
            }

        case "LOGOUT":
            return { ...state, user: [], requesting: false }

        case "CLEAR_MESSAGE":
            state.user[0].message = ""
            return { ...state, requesting: false }

        default:
            return state
    }
}

export default usersReducer