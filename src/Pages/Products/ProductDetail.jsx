import moment from 'moment';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Btn from '../../components/Btn';
import RoundSpinner from '../../components/RoundSpinner';
import { useAuth } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const ProductDetail = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { _id, title, image, price, desc, location, seller, createdAt } = useLoaderData();
    const handlePurchase = () => {
        setLoader(true);
        fetch(`${import.meta.env.VITE_APP_API_URL}/orders`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productId: _id,
                buyer: { name: user.displayName, email: user.email }
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.upsertedCount > 0) {
                    toast.success("Purchased successfully!");
                    navigate("/mypurchase");
                }
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
                console.log(err);
            })
    }
    return (
        <div className='grid lg:grid-cols-12 px-5 md:px-14 bg-base-200 gap-5'>
            <div className='col-span-12 lg:col-span-8 border mt-5 lg:mb-5 bg-base-100'>
                <div className='bg-black h-[450px]'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img className='mx-auto object-contain w-full h-full' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='p-5'>
                    <h1 className='text-lg font-bold mb-3'>Description</h1>
                    <p className='text-sm text-accent leading-6 whitespace-pre-line'>{desc}</p>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-4 my-5'>
                <div className='mb-2 bg-white border rounded p-5'>
                    <h1 className='text-4xl font-bold'>₹ {price}</h1>
                    <h2 className='text-accent mt-1'>{title}</h2>
                    <div className='text-xs mt-6 flex justify-between text-accent'>
                        <span>{location}</span>
                        <span>{moment(createdAt).format('ll')}</span>
                    </div>
                </div>
                <div className='bg-white border rounded p-5'>
                    <h1 className='text-xl'>Seller description</h1>
                    <h2 className='mt-1 font-bold'>{seller.name}</h2>
                </div>
                {user?.email && (
                    <div className='bg-white border rounded p-5'>
                        <div onClick={handlePurchase}>
                            <Btn className="w-full"><span className='flex items-center justify-center gap-2'>{loader ? <>Purchasing...<RoundSpinner className="fill-white" /> </> : 'Purchase'}</span></Btn>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;