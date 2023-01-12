import axios from 'axios';

export const getEvents = (): Promise<any> => {
    return axios.get('http://localhost:8081/event/api/events')
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            return null;
        });
}
