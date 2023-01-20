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
            return res.data[id - 1];
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}


export const getLocationByName = (name: String): Promise<any> => {

    return axios.get('http://localhost:8081/location/api/locations/' + name)
        .then(res => {
            console.log("sunt in api service getLocation " + res);
            return res.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

export const getEventsByLocation = (name: String): Promise<any> => {

    return axios.get('http://localhost:8081/event/api/events/filter/' + name)
        .then(res => {
            console.log("sunt in api service getEventsByLocation " + res);
            return res.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

export const getEventsSortByName = (): Promise<any> => {

    return axios.get('http://localhost:8081/event/api/events/sort/name')
        .then(res => {
            console.log("sunt in api service getEventsByLocation " + res);
            return res.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}

export const getEventsSortByDate = (): Promise<any> => {

    return axios.get('http://localhost:8081/event/api/events/sort/date')
        .then(res => {
            console.log("sunt in api service getEventsByLocation " + res);
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
