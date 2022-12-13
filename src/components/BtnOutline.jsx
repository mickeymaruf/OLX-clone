import React from 'react';

const BtnOutline = ({ children, className }) => {
    return (
        <div className={`w-fit border-2 border-black rounded-md ${className}`}>
            <button className='bg-white rounded text-black border-[3px] border-transparent hover:border-black font-medium capitalize hover:bg-white flex items-center p-2 gap-3'>{children}</button>
        </div>
    );
};

export default BtnOutline;