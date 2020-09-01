import {takeEvery, put, call, fork } from 'redux-saga/effects';
import * as actions from 'actions/actions';
import { getIndiaData, getUser } from '__services/APIs';

function* getUserAuth({payload}) {
    const {email, password} = payload;
    try {
        const {user} = yield call(getUser, email, password)
        if(user.refreshToken && user.email) {
            localStorage.setItem('user_auth', true)
            yield put(actions.getUserSuccess({
                auth: true
            }))
        }
    } catch (e) {
        yield put(actions.setNotification({
            value: true
        }))
    }
}

function* watchGetUserAuth() {
    yield takeEvery(actions.Types.GET_USER_AUTH, getUserAuth)
}

function* getCovidData() {
    try {
        const rawData = yield call(getIndiaData)
        yield put(actions.getCovidSuccess({
            countryData: rawData
        }))
    } catch (e) {
        console.log(e);
    }
}

function* watchGetCovidData() {
    yield takeEvery(actions.Types.GET_COVID_REQUEST, getCovidData);
}

function* notification({payload}) {
    yield put(actions.setNotification({
        value: payload
    }))
}

function* watchShowNoification() {
    yield takeEvery(actions.Types.SHOW_NOTIFICATION, notification)
}

const CovidSaga = [
    fork(watchGetCovidData),
    fork(watchGetUserAuth),
    fork(watchShowNoification)
]

export default CovidSaga;