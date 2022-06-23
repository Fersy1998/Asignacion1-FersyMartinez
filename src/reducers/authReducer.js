import { types } from "../types/types";

const initialState={
    checking:true
}


export const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.authlogin:
        return {
            ...state,
            checking:false,
            ...action.payload
        }

        case types.authFinishChecking:
            return {
                ...state,
                checking: false
            }

        case types.authlogout:
            return initialState

    default:
        return state;
  }
}