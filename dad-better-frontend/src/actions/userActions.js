
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USERS' });
        fetch("http://localhost:3000/users")
            .then((response) => { return response.json() })
            .then((responseJSON) => { dispatch({ type: "ADD_USERS", users: responseJSON })})
    }
}