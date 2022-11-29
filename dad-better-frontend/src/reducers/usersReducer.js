const usersReducer = (state = { user: [], requesting: false }, action) => {
    switch (action.type) {
        case "INITIALIZE":
            const userArray = {message: "NO USER"}
            localStorage.jwt = ''
            return { ...state, user: [userArray] }

        case "UPDATE_USER":
            return {...state, user: [action.payload]}

        case "LOGIN_USER":
            localStorage.setItem("jwt", action.payload.jwt)
            return {
                ...state, 
                user: [action.payload],
                requesting: false,
            }

        case "START_LOGIN_USER_REQUEST":
            return {
                ...state, user: [...state.user],
                requesting: true,
            }

        case "LOGOUT":
            return { ...state, user: [] }

        case "CLEAR_MESSAGE":
            state.user[0].message = ""
            return {...state}

        default:
            return state
    }
}

export default usersReducer