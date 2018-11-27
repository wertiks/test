import config from '../config';

export default class LS {

    static get(field){
        if (!LS._isExist()) return undefined;

        const data = JSON.parse(localStorage.getItem(config.localstorage.name));
        if (!field) return data;
        if (data[field]) return data[field];

        return undefined;
    }

    static set(field, data = {}){
        let dataToSrorage = {};

        if (field) {
           dataToSrorage = LS.get();
           if (!dataToSrorage) dataToSrorage = {};
           dataToSrorage[field] = data;
        } else {
            dataToSrorage = data
        }

        localStorage.setItem(config.localstorage.name, JSON.stringify(dataToSrorage));
    }

    static _isExist(){
        return localStorage.getItem(config.localstorage.name) ? true : false;
    }
}