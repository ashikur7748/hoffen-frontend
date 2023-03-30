import axios from 'axios';

const distrbutorFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/distributorlist');
        return response;
    } catch (errors) {
        return errors;
    }
}

export { distrbutorFetch }