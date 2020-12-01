import { SET_PAGE, SET_RESTO, GET_RESTO_ID, LOAD_RESTO_TYPE, LOAD_RESTO_SEARCH } from '../Actions/action'



const initialState = {
    restos: [],
    error: false,
    restoType: "None",
    searchValue: "",
    page: 1,

}

const restoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESTO:
            return {...state, restos: action.payload }
        case LOAD_RESTO_TYPE:
            return {...state, restoType: action.payload }
        case LOAD_RESTO_SEARCH:
            return {...state, searchValue: action.payload }
        case SET_PAGE:
            return {...state, page: action.payload }
        default:
            return state;
    }
}

export default restoReducer;