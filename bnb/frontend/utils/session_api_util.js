export const postUser = user => {// here because session is created with user, creative choice
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user },
    })
}

export const postSession = (user) => {//LOGIN info itself from form inputs
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user },
    })
}

export const deleteSession = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
}
