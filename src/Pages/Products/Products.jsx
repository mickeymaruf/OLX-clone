import React from 'react';

const Products = () => {
    return (
        <section className='bg-base-100 pt-10'>
            <div className='w-base mx-auto'>
                <h2 className='text-2xl mb-4'>Fresh recommendations</h2>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        [...Array(20).keys()].map(i => <div className="card border rounded-md">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>)
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