import api from './index'

export const getResto = async() => {
    try {
        const res = await api.get('api/restaurants');
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }

}