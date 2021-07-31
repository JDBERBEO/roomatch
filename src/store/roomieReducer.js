import axios from 'axios'

export const REGISTER_LOADING = 'REGISTER_LOADING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_FINISHED = 'REGISTER_FINISHED'
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'
export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const CHANGE_AGE = 'CHANGE_AGE'

export function changeName(name) {
    return {
        type: CHANGE_NAME, payload: name
    }
}

export function changeLastName(lastName) {
    return {
        type: CHANGE_LAST_NAME, payload: lastName
    }
}
export function changeEmail(email) {
    return {
        type: CHANGE_EMAIL, payload: email
    }
}
export function changePassword(password) {
    return {
        type: CHANGE_PASSWORD, payload: password
    }
}

export function changeAge(age) {
    return {
        type: CHANGE_AGE, payload: age
    }
}

export function registerRoomie(name, lastName, email, password, age, history) {
    return async function (dispatch) {
        try {
            dispatch({ type: REGISTER_LOADING })
            const { data } = await axios({
                method: 'POST',
                baseURL: 'http://localhost:8000',
                url: '/roomie/signup',
                data: { name, lastName, email, password, age }
            })
            localStorage.setItem("token", data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: data })
            history.push('/')
        } catch (error) {
            dispatch({ type: REGISTER_ERROR, payload: error.message })
        } finally {
            dispatch({ type: REGISTER_FINISHED })
        }
    }
}

const initialState = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
    description: '',
    loading: false,
    error: false,

}

function reducer(state = initialState, action) {

    switch (action.type) {

        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload,
            }
        } case CHANGE_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload,
            }
        } case CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload,
            }
        } case CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload,
            }
        } case CHANGE_AGE: {
            return {
                ...state,
                age: action.payload,
            }
        } case REGISTER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        } case REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
            }
        } case REGISTER_ERROR: {
            return {
                ...state,
                error: true,
            }
        } case REGISTER_FINISHED: {
            return {
                ...state,
                loading: false,
            }
        }
        default: {
            return state
        }
    }
}

export default reducer
