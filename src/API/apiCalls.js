import api from './index'

export const getResto = async(restaurants) => {
    try {
        console.log("i am in api call")
        const data = await api.get('api/restaurants');
        console.log(data);
        return data.data;
    } catch (error) {
        console.log(error);
    }

}

export const getRestosByName = async(restaurants) => {
    try {
        const Name = restaurants.action.action.name;
        const data = await api.get(`api/restaurants/name/${Name}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRestosByType = async(restaurants) => {
    try {
        const type = restaurants.action.payload.type
        const data = await api.get(`api/restaurants/type/${type}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRestosById = async(restaurant) => {
    try {
        const id = restaurant.action.payload.id
        const data = await api.get(`api/restaurants/${id}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}


export const getVisits = async(visits) => {
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