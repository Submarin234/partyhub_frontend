import {BASE_URL} from "./environment";

function status(response){
    console.log('response status'+response.status);
    if (response.status >= 200 && response.status<300){
        return Promise.resolve(response);
    }else if (response.status===404){
        return Promise.reject("This event doesn't exist!");
    }
}

function json(response){
    return Promise.resolve(response.json());
}

export async function getEventByName(event_name){
    var headers = new Headers();
    headers.append('Accept','application/json');
    // var token=localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer '+token);
    var myInit = {method:'GET',
        headers: headers,
        mode:'cors'
    };
    var request = new Request(BASE_URL+'/event/find/'+event_name,myInit);

    return fetch(request)
        .then(status)
        .then(json)
        .then(data=>{
            return new Promise((resolve,reject)=>
            {
                resolve(data);
            });
        }).catch(error=>{
            return Promise.reject(error);
        });
}

export async function GetEventById(event_id){
    var headers = new Headers();
    headers.append('Accept','application/json');
    // var token=localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer '+token);
    var myInit = {method:'GET',
        headers: headers,
        mode:'cors'
    };
    var request = new Request(BASE_URL+'/event/find/id/'+event_id,myInit);

    return fetch(request)
        .then(status)
        .then(json)
        .then(data=>{
            return new Promise((resolve,reject)=>
            {
                resolve(data);
            });
        }).catch(error=>{
            return Promise.reject(error);
        });
}

export async function getAllEvents(){
    var headers = new Headers();
    headers.append('Accept','application/json');
    // var token=localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer '+token);
    var myInit = {method: 'GET',
        headers: headers,
    mode:'cors'
    };
    var request = new Request(BASE_URL+'/event/find',myInit);

    return fetch(request)
        .then(status)
        .then(json)
        .then(data=>{
            return new Promise((resolve,reject)=>
            {
                resolve(data);
            });
        }).catch(error=>{
            return Promise.reject(error);
        });
}

export async function addEvent(eveniment) {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    // var token=localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer '+token);
    var myInit = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(eveniment)
    };

    var request = new Request(BASE_URL + '/event', myInit);

    return fetch(request)
        .then(status)
        .then(response => {
            var eveniment = response.text()
        }).catch(error => {
            return Promise.reject(error);
        });
}

export async function updateEvent(eveniment){
    var headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-Type','application/json');
    // var token=localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer '+token);
    var myInit = {method:'PUT',
        headers:headers,
        mode:'cors',
        body: JSON.stringify(eveniment)};

    var request = new Request(BASE_URL+'/event/'+ eveniment.id,myInit);

    return fetch(request)
        .then(status)
        .then(response=>{
            return response.text();
        }).catch(error=>{
            return Promise.reject(error);
        });
}

export async function deleteEvent(event_id){
    var headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-Type','application/json');
    // var token=localStorage.getItem("token");
    // headers.append('Authorization', 'Bearer '+token);

    var myInit= {method: 'DELETE',
        headers:headers,
        mode:'cors'};

    var request = new Request(BASE_URL+'/event/'+ event_id,myInit);

    return fetch(request)
        .then(status)
        .then(response=>{
            return response.text();
        }).catch(error=>{
            return Promise.reject(error);
        });
}