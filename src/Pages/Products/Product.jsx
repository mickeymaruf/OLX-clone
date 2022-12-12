import React from 'react';
import moment from 'moment';

const Product = ({ product }) => {
    const { title, image, price, location, createdAt } = product;
    return (
        <div className="card border rounded-md">
            <figure><img className='w-40 h-40 pt-2 object-contain' src={image} alt={title} /></figure>
            <div className="card-body gap-1 p-4">
                <h2 className="card-title font-bold">
                    ₹ {price}
                </h2>
                <p className='m-0 p-0 mb-1 text-accent'>{title}</p>
                <div className='text-xs flex justify-between text-accent'>
                    <span>{location.length > 16 ? location.slice(0, 16) + '...' : location}</span>
                    <span>{moment(createdAt).format('ll')}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;