import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddProperty = () => {
    const {user} = use(AuthContext);
    const navigate = useNavigate();

    const handleAddProperty = (e) =>{
        e.preventDefault();

        const newProperty = {
            propertyName:e.target.propertyName.value,
            description:e.target.description.value,
            category:e.target.category.value,
            price:parseFloat(e.target.price.value),
            location:e.target.location.value,
            image:e.target.image.value,
            postedBy:{
                name:user?.displayName,
                email:user?.email,
                photo:user?.photoURL,
            },
            postedDate: new Date().toISOString(),
        };
        fetch("http://localhost:3000/properties",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newProperty),
        })
        .then((res)=> res.json())
        .then(()=>{
            Swal.fire({
                title:"Property Added !",
                text:"Your property listing has been successfully posted",
                icon:"success",
                confirmButtonColor:"#FF5A3C",
            });
            navigate("/all-properties")
        });
    };
    return (
        <div className=' dark:bg-[#1D232A] py-14 min-h-screen mt-20'>
            <div className=' w-[97%] lg:w-3xl mx-auto bg-white dark:bg-[#23272B] shadow-xl rounded-xl p-5 md:p-10 border '>
               <h1 className='text-center text-xl sm:-text-2xl md:text-4xl font-bold mb-8'>
               Add New <span className='text-[#FF5A3C]'>Property</span>
               </h1>

               <form onSubmit={handleAddProperty} className='w-full'>
                {/* property name */}
                <div>
                    <label className='block font-semibold mb-1 text-sm'> Property Name</label>
                    <input type="text"
                    name='propertyName'
                    className='input input-bordered w-full'
                    placeholder='Enter property name'
                    required
                    />
                </div>

                {/* price and category */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 my-5'>
                 <div>
                    <label className='block font-semibold mb-1 text-sm'> Category</label>
                    <select name="category" className='select select-bordered w-full' required>
                        <option disabled selected>Select Category</option>
                        <option>Rent</option>
                        <option>Sale</option>
                        <option>Commercial</option>
                        <option>Land</option>
                    </select>
                 </div>
                 <div>
                      <label className='block font-semibold mb-1 text-sm'> Price (USD)</label>
                    <input type="number"
                    name='price'
                    className='input input-bordered w-full'
                    placeholder='e.g 15000'
                    required
                    />
                 </div>
                </div>
                 <div>
                      <label className='block font-semibold mb-1 text-sm'> Location</label>
                    <input type="text"
                    name='location'
                    className='input input-bordered w-full'
                    placeholder='City / Area / Address'
                    required
                    />
                 </div>
                 <div>
                      <label className='block font-semibold my-5 text-sm'>Description </label>
                     <textarea name="description"
                     className='textarea textarea-bordered w-full'
                     rows='4'
                     placeholder='White details about the property...'
                     required
                     ></textarea>
                 </div>
                  <div>
                      <label className='block font-semibold mb-1 mt-4 text-sm'> Image URL</label>
                    <input type="text"
                    name='image'
                    className='input input-bordered w-full'
                    placeholder='Enter image url'
                    required
                    />
                 </div>

                 <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
                    <input type="text"
                    value={user?.displayName}
                    className='input input-bordered w-full bg-gray-100  dark:bg-[#1D232A]'
                    readOnly
                    />
                    <input type="email"
                    value={user?.email}
                    className='input input-bordered w-full bg-gray-100 dark:bg-[#1D232A]'
                    readOnly
                    />
                 </div>
                 <button
                 type='submit'
                 className='btn w-full bg-[#FF5A3C] hover:bg-[#e24a30] text-white text-sm sm:text-lg py-1.5 sm:py-3'>
                    Add Property
                 </button>
               </form>
            </div>
        </div>
    );
};

export default AddProperty;