import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { TbCameraPlus } from 'react-icons/tb';
import avatar from '../../assets/avatar.png';
import Btn from '../../components/Btn';
import { useAuth } from '../../contexts/AuthProvider';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [getImage, setGetImage] = useState("");
    const [imageErr, setiImageErr] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setGetImage(acceptedFiles[0]);
        setiImageErr(null);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if (!getImage) {
            setiImageErr("Image is required");
            return;
        }
        const formData = new FormData();
        const image = formData.append('image', getImage);
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                data.seller = { email: user.email, name: user.displayName };
                data.image = imgData.data.display_url
                // saving product to the db
                fetch(`${import.meta.env.VITE_APP_API_URL}/products`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        toast.success(data.title + ' is added successfully');
                        navigate('/');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='w-11/12 md:w-8/12 lg:w-7/12 max-w-screen-xl mx-auto pb-20'>
            <h1 className='text-2xl font-bold text-center mb-5 mt-3'>POST YOUR AD</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 border border-gray-400 rounded">
                <div className='md:w-7/12 p-8 pb-3 md:pr-0'>
                    <h3 className='text-xl font-bold mb-2'>INCLUDE SOME DETAILS</h3>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Brand *</span>
                        </label>
                        <select disabled className="select select-bordered rounded-md w-full font-normal border-gray-400">
                            <option disabled selected value=''>Coming soon...</option>
                        </select>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Ad title *</span>
                        </label>
                        <input {...register('title', { required: true })} type="text" className="input input-bordered rounded-md border-gray-400" />
                        <small className='text-xs text-accent flex justify-between mt-1'>
                            <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
                            <span>0 / 70</span>
                        </small>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Description *</span>
                        </label>
                        <textarea {...register('desc', { required: true })} className="textarea textarea-bordered rounded-md h-28 border-gray-400"></textarea>
                        <small className='text-xs text-accent flex justify-between mt-1'>
                            <span>Include condition, features and reason for selling</span>
                            <span>0 / 4096</span>
                        </small>
                    </div>
                </div>
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0">
                                <span className="label-text font-bold text-xl">SET A PRICE</span>
                            </label>
                            <label className="label">
                                <span className="label-text text-sm text-accent">Price *</span>
                            </label>
                            <input {...register('price', { required: true })} type="number" className="input input-bordered rounded-md border-gray-400" />
                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0 mb-1">
                                <span className="label-text font-bold text-xl">UPLOAD PHOTOS</span>
                            </label>
                            <div className='h-32 w-32 flex items-center text-center border-2 border-black' {...getRootProps()}>
                                <input className='w-fit' {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop here ...</p> :
                                        <p className='flex flex-col items-center'>
                                            {getImage ? getImage?.name : <>
                                                <TbCameraPlus className='w-8 h-8' />
                                                Add Photo
                                            </>}
                                        </p>
                                }
                            </div>
                            {
                                imageErr && <p className='text-red-500 text-sm mt-1'>Add a image</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0">
                                <span className="label-text font-bold text-xl">CONFIRM YOUR LOCATION</span>
                            </label>
                            <label className="label pl-0">
                                <span className="label-text">Location *</span>
                            </label>
                            <input {...register('location', { required: true })} type="text" className="input input-bordered rounded-md border-gray-400" />
                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0">
                                <span className="label-text font-bold text-xl">REVIEW YOUR DETAILS</span>
                            </label>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <img className='w-20 mt-3 rounded-full' src={avatar} alt="" />
                                </div>
                                <div className='flex-1 mb-2'>
                                    <label className="label pl-0">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" className="w-full input input-bordered rounded-md border-gray-400" defaultValue={user?.displayName} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 p-8 md:pr-0'>
                    <div className="form-control">
                        <Btn className="w-fit">Post Now</Btn>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;