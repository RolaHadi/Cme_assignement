import { SET_RESTO } from '../Actions/action'



const initialState = {
    Restos: [],
    error: false
}

export function restoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RESTO:
            return {...state, Restos: action.payload }
        default:
            return state;
    }
}

export default restoReducer;