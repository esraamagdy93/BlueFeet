import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
    GET_PROFILE,

} from "./actionsTypes"
import {
    getProfileDataSuccess,


} from './actions'
import Queries from "../utils/queryHelper";
import { client } from "../../../../config/api";

async function getProfileCaller() {
    console.log("saga")
    return await client
        .query({
            fetchPolicy: "network-only",
            query: Queries.getProfile,
        })
        .then(resp => resp.data)
        .catch(error => console.log(error))

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

function* getProfileDataSaga() {
    yield takeEvery(GET_PROFILE, getProfile)
}




export default function* rootSaga() {
    yield all([
        fork(getProfileDataSaga),

    ]);
}