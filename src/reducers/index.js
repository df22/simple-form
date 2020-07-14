const initalState = {
    users: [],
    user: {
        firstName: '',
        lastName: '',
        email: ''
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {

        case 'LOAD_USERS':
            return {
                ...state,
                users: action.payload,
                user: {
                    firstName: '',
                    lastName: '',
                    email: ''
                }
            }
        case 'ON_FIRST_NAME_CHANGE':
            return {
                ...state,
                user: { ...state.user, firstName: action.payload }
            }
        case 'ON_LAST_NAME_CHANGE':
            return {
                ...state,
                user: { ...state.user, lastName: action.payload }
            }
        case 'ON_EMAIL_CHANGE':
            return {
                ...state,
                user: { ...state.user, email: action.payload }
            }
        default: {
            return state;
        }
    }
}

export default reducer;