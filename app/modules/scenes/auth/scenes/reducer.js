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

} from "./actionsTypes"
const initialState = {
    getProfileDataSuccess: null,
    getProfileDataFaulier: null,
    registerDataSuccess: null,
    registerDataFaulier: null,
    verifyUserDataSuccess: null,
    verifyUserDataFaulier: null

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
        case REGISTER:
            return { ...state };

        case REGISTER_DATA_SUCCESS:
            state.registerDataSuccess = action.data
            state.registerDataFaulier = null

            return {
                ...state
            }
        case REGISTER_DATA_FAILURE:
            state.registerDataSuccess = null
            state.registerDataFaulier = action.data

            return {
                ...state,
            }
            case VERIFYUSER :
                return { ...state };
    
            case VERIFYUSER_DATA_SUCCESS:
                state.verifyUserDataSuccess = action.data
                state.verifyUserDataFaulier = null
    
                return {
                    ...state
                }
            case VERIFYUSER_DATA_FAILURE:
                state.verifyUserDataSuccess = null
                state.VerifyUserDataFaulier = action.data
    
                return {
                    ...state,
                }
    

        default:
            return state
    }
}
