const usersReducer = (state = { user: [], loading: false }, action) => {
    switch (action.type) {
        
        case "INITIALIZE":
            const userArray = {message: "NO USER"}
            localStorage.jwt = 'undefined'
            return { ...state, user: [userArray] }

        case "UPDATE_USER":
            return {...state, user: [action.payload]}

        case "LOGIN_USER":
            return {...state, user: [action.payload]}

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