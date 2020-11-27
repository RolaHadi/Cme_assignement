export const LOAD_RESTO = "LOAD_RESTO";
export const loadResto = () => ({
    type: LOAD_RESTO
});


export const SET_RESTO = "SET_RESTO";
export const setResto = (data) => ({
    type: SET_RESTO,
    payload: data
});

export const SET_VISIT = "SET_VISIT";
export const setVisit = (data) => ({
    type: SET_VISIT,
    payload: data
});

export const LOAD_VISITS = "LOAD_VISITS";
export const loadVisits = (data) => ({
    type: LOAD_VISITS,
    payload: data
});

export const ADD_VISIT = "ADD_VISIT";
export const addVisit = (Resto) => ({
    type: ADD_VISIT,
    payload: Resto,
});