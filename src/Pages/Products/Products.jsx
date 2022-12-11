import React from 'react';

const Products = () => {
    return (
        <section className='bg-base-100 pt-10'>
            <div className='w-base mx-auto'>
                <h2 className='text-2xl mb-4'>Fresh recommendations</h2>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        [...Array(20).keys()].map(i => <div className="card border rounded-md">
                            <figure><img className='w-40' src="https://apollo-singapore.akamaized.net/v1/files/0dgp6txu4fx2-IN/image;s=780x0;q=60" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    ₹ 3,50,000
                                </h2>
                                <p>Honda Brio 2013-2016 V MT, 2014, CNG & Hybrids</p>
                                <div className='text-xs'>
                                    <span>BALITHA, VAPI</span>
                                    <span>SEP 05</span>
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