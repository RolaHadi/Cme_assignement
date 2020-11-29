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

export const GET_RESTO_ID = "GET_RESTO_ID";
export const get_resto_id = (id) => ({
    type: SET_VISIT,
    payload: id
});



export const LOAD_VISITS = "LOAD_VISITS";
export const loadVisits = () => ({
    type: LOAD_VISITS,
});

export const ADD_VISIT = "ADD_VISIT";
export const addVisit = (visit) => {
    console.log("i am in add visit");
    const action = {
        type: ADD_VISIT,
        payload: visit
    };
    return action;
};