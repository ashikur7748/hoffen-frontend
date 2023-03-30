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
    const response = axios.post(url, values);
    return response;
  } catch (error) {
    return error;
  }

}




export { orderSubmitted, store }