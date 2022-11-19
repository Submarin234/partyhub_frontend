import {BASE_URL} from "./environment";

function status(response){
    console.log('response status'+response.status);
    if (response.status >= 200 && response.status<300){
        return Promise.resolve(response);
    }else if (response.status===404){
        return Promise.reject("This event doesn't exist!");
    }
}