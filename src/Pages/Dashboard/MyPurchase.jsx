import React from 'react';
import BtnOutline from '../../components/BtnOutline';
import noPublications from '../../assets/no-publications.webp';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../contexts/AuthProvider';
import moment from 'moment';
import { SlEnvolope } from 'react-icons/sl'
import { FaBullhorn } from 'react-icons/fa';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { HiOutlineXMark } from 'react-icons/hi2';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';

const MyPurchase = () => {
    const { user } = useAuth();
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`${import.meta.env.VITE_APP_API_URL}/orders?email=${user?.email}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            {
                orders.length < 1
                    ? <div className='md:w-2/6 mx-auto text-center pt-20 pb-12'>
                        <img className='w-48 h-48 mx-auto' src={noPublications} alt="" />
                        <p className='font-bold text-accent mt-4'>You haven't listed anything yet</p>
                        <p className='text-sm mt-4 text-accent'>Let go of what you <br /> don't use anymore</p>
                        <Link to="/"><BtnOutline className="w-fit mx-auto mt-3">start buying</BtnOutline></Link>
                    </div>
                    : <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='capitalize text-sm font-normal'>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th className='capitalize text-sm font-normal'>
                                        Date
                                    </th>
                                    <th></th>
                                    <th className='capitalize text-sm font-normal'>Title</th>
                                    <th className='capitalize text-sm font-normal'>Price</th>
                                    <th className='capitalize text-sm font-normal'>Your Info</th>
                                    <th className='capitalize text-sm font-normal'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OrderTable key={order._id} order={order}></OrderTable>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

const OrderTable = ({ order }) => {
    const { productId, createdAt, buyer } = order;
    const { data: product = {} } = useQuery({
        queryKey: ['products', productId],
        queryFn: () => fetch(`${import.meta.env.VITE_APP_API_URL}/products/${productId}`)
            .then(res => res.json())
    })

    return (
        <tr key={product._id}>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <p className='text-xs text-accent font-normal'>{moment(createdAt).format("MMM Do YY")}</p>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-16 h-24 object-contain">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold text-sm">{product.title}</div>
                        <div className='text-xs flex mt-1 gap-1'>
                            <button className='underline lowercase text-red-400 flex items-center gap-px'><HiOutlineXMark className='mt-1' /> Cancel Order</button>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <p className='font-bold'>₹ {product.price}</p>
            </td>
            <td>
                {buyer?.name}
                <br />
                <span className="badge badge-ghost badge-sm">{buyer?.email}</span>
            </td>
            <th>
                <button className='flex px-3 py-[5px] text-sm rounded text-white w-fit gap-2 items-center bg-green-500 font-medium'>
                    Order Placed
                </button>
            </th>
        </tr>
    );
}

export default MyPurchase;