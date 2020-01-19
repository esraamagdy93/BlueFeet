import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
    GET_COURTS, CREATE_RESERVATION,
  

} from "./actionsTypes"
import {
    getCourtsDataSuccess,
    createReservationData
   


} from './actions'
import Queries from "./utils/queryHelper";
import { client } from "../../../config/api";



async function getCourtsCaller() {
    return await client
        .query({
            fetchPolicy: "network-only",
            query: Queries.getCourts,
            variables: {
                lng : 36.334775,
                lat: 31.376063,
               
               },
        })
        .then(resp => resp.data)
        .catch(error => console.log(error))

}
async function createReservationCaller(courtId,date, from,to) {
    console.log("date",date)
    console.log("to",to)
    console.log("from",from)
    console.log("courtId",courtId)

        return await client
            .mutate({
                mutation: Queries.createReservation,
                variables: {
                    reservation: {
                        court: courtId,
                        date:parseFloat(date) ,
                        from: from,
                        to: to,
                        paymentMethod: "CASH_ON_SPOT",
                        type: "PRIVATE",
                }}
    
            })
            .then(resp =>   resp)
            .catch(error =>
                error)
    
    }
    function* createReservation(action) {

        try {
            const response = yield call(
                createReservationCaller,
                action.payload.court,
                action.payload.date,
                action.payload.from,
                action.payload.to
            );
            if (response) {
                console.log("hhhaeeeyyyy")
                yield put(createReservationData(response))
    
            }
        } catch (e) {
            console.log(e)
    
        }
    }




function* getCourts() {
    try {
        console.log(11)
        const response = yield call(
            getCourtsCaller,

        );
        if (response) {

            yield put(getCourtsDataSuccess(response))

        }
    } catch (e) {
        console.log(e)

    }
}


function* getCourtsDataSaga() {
    yield takeEvery(GET_COURTS, getCourts)

}
function* createReservationDataSaga() {
    yield takeEvery(CREATE_RESERVATION, createReservation)

}





export default function* rootSaga() {
    yield all([
       
        fork(getCourtsDataSaga),
        fork(createReservationDataSaga)
    ]);
}