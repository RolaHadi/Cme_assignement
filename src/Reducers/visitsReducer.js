import { SET_VISIT, ADD_VISIT } from '../Actions/action'


const initialState = {
    Visits: [],
    error: false
}

const visitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIT:
            return {...state, Visits: action.payload }
        case ADD_VISIT:
            return {...state, Visits: action.payload }
        default:
            return state;
    }
}

export default visitsReducer;