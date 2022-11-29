export const fetchUser = (username, password) => {
    return (dispatch) => {
        dispatch({ type: "START_LOGIN_USER_REQUEST" });
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    message: "new user login"
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "LOGIN_USER", payload: data })
            })
    }
}