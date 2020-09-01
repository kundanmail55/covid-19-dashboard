import * as AuthHelper from './APIHelper';
import { auth } from 'config/firebase';

export const getIndiaData = () => {
    return AuthHelper.getResponse('/data.json')
}

export const registerUser = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
}

export const getUser = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
}