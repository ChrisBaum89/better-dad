const usersReducer = (state = { user: [], loading: false}, action) => {
    switch (action.type) {
        case "LOADING_USERS":
            return { 
                ...state, user: [...state.user],
                loading: true,
            };
            case "ADD_USERS":   
            return {
                    ...state,
                    user: action.user.data,
                    loading: false
                }
            case "SET_USER":
                debugger  
            return {...state, user: [action.payload]}

        default:
            return state
    }
}

export default usersReducer