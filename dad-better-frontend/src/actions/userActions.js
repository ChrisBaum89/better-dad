export const fetchUser = (
    userId = null,
    username = '',
    password = '',
    email = '',
    name = '',
    existingPassword = '',
    newPassword = '',
    message = '',
    updateType = '',
    dispatchType = '',
    fetchUrl = ''
) => {
    return (dispatch) => {
        dispatch({ type: "START_USER_REQUEST" });
        fetch(fetchUrl,
            jsonUserCommon(
                userId,
                username,
                password,
                email,
                name,
                existingPassword,
                newPassword,
                message,
                updateType,
                ))
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: dispatchType, payload: data })
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
            body: JSON.stringify(jsonUserUpdate(userId, name, email)),
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
            body: JSON.stringify(jsonPasswordUpdate(userId, existingPassword, newPassword)),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({ type: "UPDATE_USER", payload: data })
            })
    }
}

export const jsonUserCommon = (
    userId = 0,
    username = '',
    password = '',
    email = '',
    name = '',
    existingPassword = '',
    newPassword = '',
    message = '',
    updateType = '',
) => {
    return (
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${localStorage.jwt}`,
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: userId,
                    username: username,
                    password: password,
                    email: email,
                    name: name,
                    existing_password: existingPassword,
                    new_password: newPassword,
                },
                message: message,
                update_type: updateType
            }),
        })
}

export const jsonUser = (username, password) => {
    return (
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${localStorage.jwt}`,
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
}

export const jsonCreateUser = (username, password, email, name) => {
    return (
        {
            user: {
                username: username,
                password: password,
                email: email,
                name: name,
                update_type: 'create user'
            }
        }
    )
}

export const jsonPasswordUpdate = (userId, existingPassword, newPassword) => {
    return (
        {
            user: {
                user_id: userId,
                existing_password: existingPassword,
                new_password: newPassword,
                update_type: "update_password",
            }
        })
}

export const jsonUserUpdate = (userId, name, email) => {
    return (
        {
            user: {
                user_id: userId,
                email: email,
                name: name,
                update_type: "update_user_settings",
            }
        })
}

