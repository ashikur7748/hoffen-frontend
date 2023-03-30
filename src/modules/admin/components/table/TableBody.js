import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import moment from 'moment';
import { Loader } from '../loader/Loader';

export const TableBody = () => {
  const [orderListFetched, setOrderListFetched] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const orderListFetch = async () => {
    axios.get('http://localhost:8000/api/orderlistfetch')
      .then((response) => {
        if (response.status === 200) {
          setOrderListFetched(response.data.OrderList);
          setIsLoading(false);
        } else {
          swal({
            title: "Data Fetched Faild",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  useEffect(() => {
    orderListFetch();
  }, []);

  return (
    <tbody>
      {isLoading ? <tr><td colSpan={6}><Loader /></td></tr> : orderListFetched.map((item, key) => (
        <tr key={key}>
          <td>{item.order_id}</td>
          <td>{item.fullname}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.product_name}</td>
          <td>{item.massage}</td>
          <td>{moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}</td>
        </tr>
      ))
      }
    </tbody>
  )
}
