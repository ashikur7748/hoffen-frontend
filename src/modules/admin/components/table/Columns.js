import { Link, useNavigate, Navigate } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { deleteRecord } from "../../api/Axios";
import { apiDistributorDelete } from "../../api/ApiList";
import moment from 'moment/moment';
import swal from 'sweetalert';



const orderList = [
    {
        label: "ID",
        path: 'order_id',
        content: (item, path) => <td>{item[path]}</td>
    },
    {
        label: "Fullname",
        path: 'fullname',
        content: (item, path) => <td>{item[path]}</td>
    },
    {
        label: "Email",
        path: 'email',
        content: (item, path) => <td>{item[path]}</td>
    },
    {
        label: "Phone",
        path: 'phone',
        content: (item, path) => <td>{item[path]}</td>
    },
    {
        label: "Product Name",
        path: 'product_name',
        content: (item, path) => <td>{item[path]}</td>
    },
    {
        label: "Massage",
        path: 'massage',
        content: (item, path) => <td>{item[path]}</td>
    },
    {
        label: "Order Date",
        path: 'created_at',
        content: (item, path) => <td>{moment(item[path]).format('MMMM Do YYYY, h:mm:ss a')}</td>
    },
];

export { orderList }
