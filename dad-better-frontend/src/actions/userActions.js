export const fetchUser = (username, password) => {
    return (dispatch) => {
        dispatch({ type: "START_USER_REQUEST" });
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

export const fetchUserUpdate = (userId, name, email) => {
    return (dispatch) => {
        dispatch({ type: "START_USER_REQUEST" })
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${localStorage.jwt}`,
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: userId,
                    email: email,
                    name: name,
                    update_type: "update_user_settings",
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({ type: "UPDATE_USER", payload: data })
            })
    }
}

export const fetchPasswordUpdate = (userId, existingPassword, newPassword) => {
    return (dispatch) => {
        dispatch({ type: "START_USER_REQUEST" })
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${localStorage.jwt}`,
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: userId,
                    existing_password: existingPassword,
                    new_password: newPassword,
                    update_type: "update_password",
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({ type: "UPDATE_USER", payload: data })
            })
    }
}