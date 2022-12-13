import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from './Product';

const Products = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`${import.meta.env.VITE_APP_API_URL}/products`)
            .then(res => res.json())
    })
    return (
        <section className='bg-base-100 pt-10'>
            <div className='w-base mx-auto'>
                <h2 className='text-2xl mb-4'>Fresh recommendations</h2>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        products?.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
                <div className='py-20 flex justify-center'>
                    <button className="btn btn-outline rounded-md">Load More</button>
                </div>
            </div>
        </section>
    );
};

export default Products;