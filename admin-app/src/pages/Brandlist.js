import React from 'react'
import {Table} from "antd";
import {BiEdit} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { useEffect } from 'react';
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
        title: 'Action',
        dataIndex: 'action',
      },
  ];
const Brandlist= () => {
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getBrands())},[]);
  const brandState=useSelector((state)=>state.brand.brands);
  const data1=[];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i+1,
      name: brandState[i].title,
      action:(<>
        <Link to='/' className='fs-3 text-danger'>
            <BiEdit/>
        </Link>
        <Link to="/" className="ms-3 fs-3 text-danger">
          <AiFillDelete/>
        </Link>
        </>)
  
      });
    }
  return (
    <div>
    <h3 className="mb-4 title">Brandlist</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
  }
export default Brandlist 