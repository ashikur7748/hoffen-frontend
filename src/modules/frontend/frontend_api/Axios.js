import axios from 'axios';

const distrbutorFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/distributorlist');
        return response;
    } catch (errors) {
        return errors;
    }
}

const eventFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/eventshow');
        return response;
    } catch (errors) {
        return errors;
    }
}

const newsFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/newsshow');
        return response;
    } catch (errors) {
        return errors;
    }
}

const orderListFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/orderlistfetch')
        return response;
    } catch (errors) {
        return errors;
    }
}

const fetchContactInfo = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/contactinfoshow');
        return response;
    } catch (errors) {
        return errors;
    }
}

export { distrbutorFetch, orderListFetch, fetchContactInfo, eventFetch, newsFetch }