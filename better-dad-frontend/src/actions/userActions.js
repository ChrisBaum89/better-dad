export const fetchUser = (
    userId = '',
    username = '',
    password = '',
    email = '',
    name = '',
    existingPassword = '',
    newPassword = '',
    message = '',
    updateType = '',
    taskId = '',
    dispatchType = '',
    fetchUrl = ''
) => {
    return (dispatch) => {
        dispatch({ type: "START_USER_REQUEST" });
        fetch(fetchUrl,
            jsonUser(
                userId,
                username,
                password,
                email,
                name,
                existingPassword,
                newPassword,
                message,
                updateType,
                taskId,
            ))
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: dispatchType, payload: data })
            })
    }
}

export const jsonUser = (
    userId = 0,
    username = '',
    password = '',
    email = '',
    name = '',
    existingPassword = '',
    newPassword = '',
    message = '',
    updateType = '',
    taskId = '',
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
                    task_id: taskId
                },
                message: message,
                update_type: updateType
            }),
        })
}

export const sendLoginToServer = () => {
    return (dispatch) => {
        dispatch({ type: "START_USER_REQUEST"})
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${localStorage.jwt}`,
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    message: "user login with JWT"
                },
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                localStorage.setItem("jwt", data.jwt)
                dispatch({ type: "LOGIN_USER", payload: data })
            })
    }
}