function userReducer(state = { users: [], action }) {
    switch (action.type) {
        case "ADD_ASTRONAUTS":
            return { ...state, users: action.users };
        default:
            return state
    }
}