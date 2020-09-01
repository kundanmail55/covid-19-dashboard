export const Types = {
    GET_COVID_REQUEST: 'get_covid_request',
    GET_COVID_SUCCESS: 'get_covid_success',
    GET_USER_AUTH: 'get_user_auth',
    GET_USER_SUCCESS: 'get_user_success',
    SIGN_OUT_USER: 'sign_out_user',
    SHOW_NOTIFICATION: 'show_notification',
    SET_NOTIFICATION: 'set_notification'
}

export const getCovidRequest = () => ({
    type: Types.GET_COVID_REQUEST
});

export const getCovidSuccess = ({countryData}) => ({
    type: Types.GET_COVID_SUCCESS,
    payload: {countryData}
});

export const getUserAuth = (user) => ({
    type: Types.GET_USER_AUTH,
    payload: user
});

export const userSignOut = () => ({
    type: Types.SIGN_OUT_USER
})

export const getUserSuccess = ({auth}) => ({
    type: Types.GET_USER_SUCCESS,
    payload: {auth}
})

export const showNotification = (value) => ({
    type: Types.SHOW_NOTIFICATION,
    payload: value
})

export const setNotification = ({value}) => ({
    type: Types.SET_NOTIFICATION,
    payload: {value}
})