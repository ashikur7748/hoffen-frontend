import React, { useState, useEffect } from 'react';
import { CutomizeTable } from '../../components/table/CutomizeTable';
import { orderList } from '../../components/table/Columns';
import axios from 'axios';
import swal from 'sweetalert';

export const OrderList = () => {

  return (

    <CutomizeTable
      columns={orderList}
    />
  )
}
