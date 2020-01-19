import {
    GET_PROFILE,
    GET_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_FAILURE,
    REGISTER,
    REGISTER_DATA_SUCCESS,
    REGISTER_DATA_FAILURE,
    VERIFYUSER,
    VERIFYUSER_DATA_SUCCESS,
    VERIFYUSER_DATA_FAILURE,
} from "./actionsTypes";

export const getProfileData = (object) => (
    console.log("action"),
    {
        type: GET_PROFILE,
    })

export function getProfileDataSuccess(data) {
    return {
        type: GET_PROFILE_DATA_SUCCESS,
        data
    }
}

export function getProfileDataFaulier(data) {
    return {
        type: GET_PROFILE_DATA_FAILURE,
        data
    }
}

export const registerData = (object) => (
    console.log("action",object),
    {
        type: REGISTER,
        payload: object,


    })

export function registerDataSuccess(data) {
    return {
        type: REGISTER_DATA_SUCCESS,
        data
    }
}

export function registerDataFaulier(data) {
    return {
        type: REGISTER_DATA_FAILURE,
        data
    }
}
export const verifyUserData = (object) => (
    console.log("action",object),
    {
        type: VERIFYUSER,
        payload: object,


    })

export function verifyUserDataSuccess(data) {
    return {
        type: VERIFYUSER_DATA_SUCCESS,
        data
    }
}

export function verifyUserDataFaulier(data) {
    return {
        type: VERIFYUSER_DATA_FAILURE,
        data
    }
}
