import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    getUserToken() {
        const token = JSON.parse(sessionStorage.getItem('user'));
        return !token ? null : token.a_t;
    }

    getUserRole() {
        const role = JSON.parse(sessionStorage.getItem('user'));
        return !role ? null : role.users.roles[0];
    }

    getUsername() {
        const username = JSON.parse(sessionStorage.getItem('user'));
        return !username ? null : username.users.username;
    }

    clearSessionStorage() {
        sessionStorage.clear();
    }

    setToSessionStorage(key: string, item: any) {
        sessionStorage.setItem(key, JSON.stringify(item));
    }
}
