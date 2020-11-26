import { LOAD_VISITS, ADD_VISIT } from './Actions/action'


const initialState = {
    Visits: [],
    error: false
}

export function visitsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_RESTO:
            return {...state, Visits: action.payload }
        case ADD_RESTO:
            return {...state, Visits: action.payload }
        default:
            return state;
    }
}

export default visitsReducer;