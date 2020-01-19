import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
    GET_PROFILE,
    REGISTER,
    VERIFYUSER

} from "./actionsTypes"
import {
    getProfileDataSuccess,
    registerDataSuccess,
    verifyUserDataSuccess


} from './actions'
import Queries from "../utils/queryHelper";
import { client } from "../../../../config/api";

async function registerCaller(phone, _id) {

    return await client
        .mutate({
            mutation: Queries.register,
            variables: {
                user: {
                    phone: phone,
                    _id: _id
                },
            },

        })
        .then(resp => resp
        )
        .catch(error =>
            console.log(error))

}


async function verifyUserCaller(code, _id) {
    return await client
        .mutate({
            mutation: Queries.verifyUser,
            variables: {
                _id: _id,
                code: code


            },

        })
        .then(resp => resp
        )
        .catch(error =>
            console.log(error))

}


async function getProfileCaller() {
    return await client
        .query({
            fetchPolicy: "network-only",
            query: Queries.getProfile,
        })
        .then(resp => resp.data)
        .catch(error => console.log(error))

}
function* register(action) {
    try {
        const response = yield call(
            registerCaller,
            action.payload.phone,
            action.payload.__id,


        );
        if (response) {

            yield put(registerDataSuccess(response))

        }
    } catch (e) {
        console.log(e)

    }
}

function* verifyUser(action) {
    try {
        const response = yield call(
            verifyUserCaller,
            action.payload.code,
            action.payload._id,


        );
        if (response) {

            yield put(verifyUserDataSuccess(response))

        }
    } catch (e) {
        console.log(e)

    }
}

function* getProfile() {
    try {
        console.log(11)
        const response = yield call(
            getProfileCaller,

        );
        if (response) {

            yield put(getProfileDataSuccess(response))

        }
    } catch (e) {
        console.log(e)

    }
}

function* registerDataSaga() {
    yield takeEvery(REGISTER, register)

}
function* verifyUserDataSaga() {
    yield takeEvery(VERIFYUSER, verifyUser)

}
function* getProfileDataSaga() {
    yield takeEvery(GET_PROFILE, getProfile)

}




export default function* rootSaga() {
    yield all([
        fork(registerDataSaga),
        fork(verifyUserDataSaga),
        fork(getProfileDataSaga)

    ]);
}