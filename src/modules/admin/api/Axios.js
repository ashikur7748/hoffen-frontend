import axios from 'axios';
import swal from 'sweetalert';


const orderSubmitted = async (values, resetForm) => {
  axios.post('http://localhost:8000/api/orderproduct', values)
    .then((response) => {
      if (response.status === 200) {
        swal({
          title: "Order Successfully",
          icon: "success",
        });
        resetForm();
      } else {
        swal({
          title: "Please Try Again",
          icon: "error",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })

}

const store = async (url, values) => {
  try {
    const response = await axios.post(url, values);
    return response;
  } catch (error) {
    return error;
  }

}

const show = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
}

const edit = async (url, id) => {
  try {
    const response = await axios.post(url, id);
    return response;
  } catch (error) {
    return error;
  }

}

const update = async (url, values) => {
  try {
    const response = await axios.post(url, values);
    return response;
  } catch (error) {
    return error;
  }

}

const deleteRecord = async (url, id) => {
  try {
    const response = await axios.post(url, id);
    return response;
  } catch (error) {
    return error;
  }

}

const showCategory = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
}

const showSubCategory = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
}




export { orderSubmitted, store, show, edit, update, deleteRecord, showCategory, showSubCategory }