import {
    GET_COURTS,
    GET_COURTS_DATA_SUCCESS,
    GET_COURTS_DATA_FAILURE,
    CREATE_RESERVATION,
    CREATE_RESERVATION_DATA_SUCCESS,
    CREATE_RESERVATION_DATA_FAILURE
} from "./actionsTypes";




export const getCourtsData = (object) => (
    console.log("action"),
    {
        type: GET_COURTS,
    })

export function getCourtsDataSuccess(data) {
    return {
        type: GET_COURTS_DATA_SUCCESS,
        data
    }
}

export function getCourtsDataFaulier(data) {
    return {
        type: GET_COURTS_DATA_FAILURE,
        data
    }
}

export const createReservationData = (object) => ({
    type: CREATE_RESERVATION,
    payload: object
})

export function createReservationDataSuccess(data) {
    return {
        type: CREATE_RESERVATION_DATA_SUCCESS,
        data
    }
}

export function createReservationDataFaulier(data) {
    return {
        type: CREATE_RESERVATION_DATA_FAILURE,
        data
    }
}
