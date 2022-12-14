import moment from 'moment';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Btn from '../../components/Btn';

const ProductDetail = () => {
    const [loader, setLoader] = useState(false);
    const { _id, title, image, price, desc, location, seller, createdAt } = useLoaderData();
    const handlePurchase = () => {
        
    }
    return (
        <div className='grid grid-cols-12 px-14 bg-base-200 gap-5'>
            <div className='col-span-8 border my-5 bg-base-100'>
                <div className='bg-black h-[450px]'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img className='mx-auto object-contain w-full h-full' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='p-5'>
                    <h1 className='text-lg font-bold mb-3'>Description</h1>
                    <pre className='text-sm text-accent leading-8'>{desc}</pre>
                </div>
            </div>
            <div className='col-span-4 my-5'>
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
                <div className='bg-white border rounded p-5'>
                    <div onClick={handlePurchase}>
                        <Btn className="w-full">Purchase</Btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;