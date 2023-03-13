

import React, { useEffect } from 'react'
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {getOrders} from "../features/auth/authSlide"
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title:'Amount',
      dataIndex:'amount',
    },
    {
      title:'Date',
      dataIndex:'date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
      },
  ];
 
const Orders= () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getOrders());
  },[])
  const orderState=useSelector((state)=>state.auth.orders);
  console.log(orderState.orderby.firstname);
  console.log(orderState);
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i+1,
      name: orderState[i].orderby.firstname,
      product:orderState[i].products.map((i,j)=>{
        return <>
          <ul key={j}>
            <li>
              {i.product.title} 
              </li> 
            </ul> 
        </>;
      }),
      amount:orderState[i].paymentIntent.amount,
      date: new Date(orderState[i].createAt).toLocaleString(),
      action:(<>
      <Link to='/' className='fs-3 text-danger'>
          <BiEdit/>
      </Link>
      <Link to="/" className="ms-3 fs-3 text-danger">
        <AiFillDelete/>
      </Link>
      </>)
    });}

  return (
    <div>
    <h3 className="mb-4 title">Orders</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Orders 