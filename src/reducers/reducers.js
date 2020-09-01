import { Types } from 'actions/actions';

const defaultState = {
    countryData: {},
    auth: localStorage.getItem('user_auth') || false,
    notification: false
}

function reducer(state = defaultState, action) {
    switch(action.type){
        case Types.GET_USER_SUCCESS : return {
            ...state,
            auth: action.payload.auth,
        }
        case Types.GET_COVID_SUCCESS : return {
            ...state,
            countryData: action.payload.countryData
        }
        case Types.SET_NOTIFICATION : return {
            ...state,
            notification: action.payload.value
        }
        case Types.SIGN_OUT_USER : return {
            ...state,
            auth: false,
        }
        default: return state;
    }
}

export default reducer;