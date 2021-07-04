import axios from 'axios'

export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_FINISHED = 'LOGIN_FINISHED'
export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

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
export function login( email, password , history) {
   return async function(dispatch) {
       try {
        dispatch({ type: LOGIN_LOADING})
        const { data } = await axios ({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url:'/roomie/signin', 
        data: { email,  password }
    })
    console.log(data)
  
    dispatch({type: LOGIN_SUCCESS, payload: data })
    history.push('/roomie/profile')    
    } catch(error) {
    dispatch({ type: LOGIN_ERROR, payload: error })           
    } finally {
    dispatch ({type : LOGIN_FINISHED })
    }
     } 
}

const initialState = { 

    email: '',
    password: '',
    loading: false,
    error: false,

}

function reducer(state = initialState, action) {
 
    switch(action.type) {

         case CHANGE_EMAIL: {
            return {
                ...state,
                email:action.payload,
                }            
        } case CHANGE_PASSWORD: {
            return {
                ...state,
                password:action.payload,
                }            
        } case LOGIN_LOADING:{
            return {
                ...state,
                loading: true,
                }
        } case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
            }
        } case LOGIN_ERROR: {
                return {
                ...state,
                error: false,
                }
        }case LOGIN_FINISHED: {
                return {
                ...state,
                loading: false,
                }
            }
        default:{
            return state
        }
    }
}

export default reducer 