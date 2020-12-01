import api from './index'

export const getResto = async(page) => {
    try {
        console.log(page)
        console.log("i am in api call")
        const data = await api.get(`api/restaurants/?page=${page}&size=4`);
        console.log(data);
        return data.data.content;
    } catch (error) {
        console.log(error);
    }

}

export const getRestosByName = async(name) => {
    try {
        console.log(name);
        const data = await api.get(`api/restaurants/name/${name}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRestosByType = async(typeResto) => {
    try {
        const data = await api.get(`api/restaurants/type/${typeResto}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRestosById = async(id) => {
    try {
        const data = await api.get(`api/restaurants/${id}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}


export const getRestosByPrefix = async(prefix) => {
    try {
        console.log(prefix)
        const data = await api.get(`api/restaurants/search/${prefix}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getVisits = async() => {
    try {
        console.log("i am in api call")
        const data = await api.get('api/visits');
        console.log(data);
        return data.data;
    } catch (error) {
        console.log(error);
    }

}



export const postVisit = async(data) => {
    try {
        console.log("i am in api")
        const result = await api.post("api/visits", data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}