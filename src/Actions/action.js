export const LOAD_RESTO = "LOAD_RESTO";
export const loadResto = (page) => ({
    type: LOAD_RESTO,
    payload: page
});

export const LOAD_RESTO_TYPE = "LOAD_RESTO_TYPE";
export const loadRestoType = (typeResto) => ({
    type: LOAD_RESTO_TYPE,
    payload: typeResto
});


export const LOAD_RESTO_SEARCH = "LOAD_RESTO_SEARCH";
export const loadRestoSearch = (prefix) => ({
    type: LOAD_RESTO_SEARCH,
    payload: prefix
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

export const SET_PAGE = "SET_PAGE"
export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page

})

export const SET_NUMBER_PAGE = "SET_NUMBER_PAGE"
export const setNumberPage = (nbPage) => ({
        type: SET_NUMBER_PAGE,
        payload: nbPage

    }


)