import axios from 'axios';

export const getEvents = (): Promise<any> => {
    return axios.get('http://localhost:8081/event/api/events')
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            return null;
        });
}


export const getEventById = (id: number): Promise<any> => {

    return axios.get('http://localhost:8081/event/api/events/', {
        params: {
            id: id
        }
    })
        .then(res => {
            console.log(res);
            return res.data[id];
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}


export const getLocationByName = (name: String): Promise<any> => {

    return axios.get('http://localhost:8081/location/api/locations/' + name)
        .then(res => {
            console.log("sunt in api service getLocation "+ res);
            return res.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

export const getLocations = (): Promise<any> => {
    return axios.get('http://localhost:8081/location/api/locations/')
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            return null;
        });
}
