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




export const postVisit = async(data) => {
    try {
        const result = await api.post("/visits", data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}