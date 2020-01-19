import {
    GET_COURTS,
    GET_COURTS_DATA_SUCCESS,
    GET_COURTS_DATA_FAILURE,
    CREATE_RESERVATION,
    CREATE_RESERVATION_DATA_SUCCESS,
    CREATE_RESERVATION_DATA_FAILURE
 
} from "./actionsTypes"
const initialState = {
    getCourtsDataSuccess: null,
    getCourtsDataFaulier: null,
    createReservationDataSuccess:null,
    createReservationDataFaulier:null
   

}
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURTS:
            return { ...state };

        case GET_COURTS_DATA_SUCCESS:
            state.getCourtsDataSuccess = action.data
            state.getCourtsDataFaulier = null

            return {
                ...state
            }
        case GET_COURTS_DATA_FAILURE:
            state.getCourtsDataSuccess = null
            state.getCourtsDataFaulier = action.data

            return {
                ...state,
            }
            case CREATE_RESERVATION:
                return { ...state };
    
            case CREATE_RESERVATION_DATA_SUCCESS:
                state.createReservationDataSuccess = action.data
                state.createReservationDataFaulier = null
    
                return {
                    ...state
                }
            case CREATE_RESERVATION_DATA_FAILURE:
                state.createReservationDataSuccess = null
                state.createReservationDataFaulier= action.data
    
                return {
                    ...state,
                }

        default:
            return state
    }
}
