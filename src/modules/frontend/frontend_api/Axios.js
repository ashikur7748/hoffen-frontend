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

const categoryFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/categoryshow');
        return response;
    } catch (errors) {
        return errors;
    }
}

const subCategoryFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/subcategoryshow');
        return response;
    } catch (errors) {
        return errors;
    }
}

const productFetch = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/productshow');
        return response;
    } catch (errors) {
        return errors;
    }
}

const productCategoryWiseFetch = async (id) => {
    try {
        const response = axios.post('http://localhost:8000/api/productcategorywiseshow', id);
        return response;
    } catch (errors) {
        return errors;
    }
}
const productSubCategoryWiseFetch = async (id) => {
    try {
        const response = axios.post('http://localhost:8000/api/productsubcategorywiseshow', id);
        return response;
    } catch (errors) {
        return errors;
    }
}

const filterProductSubCategoryWise = async (id) => {
    try {
        const response = axios.post('http://localhost:8000/api/productsubcategorywisefilter', id);
        return response;
    } catch (errors) {
        return errors;
    }
}


const showSubcategoryList = async (id) => {
    try {
        const response = axios.post('http://localhost:8000/api/productsubcategorylist', id);
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

export { distrbutorFetch, orderListFetch, fetchContactInfo, eventFetch, newsFetch, categoryFetch, subCategoryFetch, productFetch, productCategoryWiseFetch, productSubCategoryWiseFetch, showSubcategoryList, filterProductSubCategoryWise }