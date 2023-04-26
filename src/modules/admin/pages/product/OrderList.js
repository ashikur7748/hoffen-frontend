import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import { CutomizeTable } from '../../components/table/CutomizeTable';
import { orderList } from '../../components/table/Columns';
import { orderListFetch } from '../../../frontend/frontend_api/Axios';



export const OrderList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    orderListFetch()
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        navigate(`/errorpageprivate/${message}`);
      });
  }, []);

  return (

    <CutomizeTable columns={orderList} rows={data} isLoading={isLoading} />
  )
}
