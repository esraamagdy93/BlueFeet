import {   
    GET_PROFILE,
    GET_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_FAILURE,
} from "./actionsTypes"
const initialState = {
    getProfileDataSuccess:null,
    getProfileDataFaulier:null

}
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return { ...state };

        case GET_PROFILE_DATA_SUCCESS:
            state.getProfileDataSuccess = action.data
            state.getProfileDataFaulier = null

            return {
                ...state
            }
        case GET_PROFILE_DATA_FAILURE:
            state.getProfileDataSuccess = null
            state.getProfileDataFaulier = action.data

            return {
                ...state,
            }

        default:
            return state
    }
}
