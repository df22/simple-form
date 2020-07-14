import axios from 'axios';

export const addUser = (user) => {
    return dispatch => {
        axios.post('http://localhost:5000/users/add', user)
            .then(response => {
                console.log(response.data)
                dispatch(getUsers())
            });
    }
}

export const deleteUser = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(response => {
                console.log(response.data)
                dispatch(getUsers());
            });
    }
}

export const getUsers = () => {
    return dispatch => {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                dispatch(loadUsers(response.data))
            })
    }
}

export const loadUsers = (response) => {
    return {
        type: 'LOAD_USERS',
        payload: response
    }
}

export const onFirstNameChange = (event) => {
    return {
        type: 'ON_FIRST_NAME_CHANGE',
        payload: event.target.value
    }

}
export const onLastNameChange = (event) => {
    return {
        type: 'ON_LAST_NAME_CHANGE',
        payload: event.target.value
    }

}
export const onEmailChange = (event) => {
    return {
        type: 'ON_EMAIL_CHANGE',
        payload: event.target.value
    }

}