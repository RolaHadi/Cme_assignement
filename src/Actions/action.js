export const LOAD_RESTO = "LOAD_RESTO";
export const SET_RESTO = "SET_RESTO";


export const LOAD_VISITS = "LOAD_VISITS";


export const ADD_VISIT = "ADD_VISIT";


export const loadResto = () => ({
    type: LOAD_RESTO
});



export const setResto = (data) => ({
    type: SET_RESTO,
    payload: data
});