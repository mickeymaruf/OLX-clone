import React from 'react';

const Btn = ({ children, className }) => {
    return (
        <div className={`border-[5px] border-black rounded ${className}`}>
            <button className='bg-black w-full py-2 text-white font-bold hover:bg-transparent hover:text-black'>{children}</button>
        </div>
    );
};

export default Btn;