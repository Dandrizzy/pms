import { useForm } from 'react-hook-form';
import { FaArrowLeftLong, FaCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateApi } from '../Hooks/Create/useCreateApi';
import { useCreate } from '../Hooks/Create/useCreate';
import Spinner from '../ui/Spinner';
import { useUser } from './authentication/useUser';
const CreateForm = () => {

 const navigate = useNavigate();
 const { user, isLoading } = useUser();

 const { create: createFn } = useCreateApi({ key: 'pmsTicket' });
 const { create, isCreating } = useCreate({ key: ['pmsTicket'], fn: createFn });


 const [statusDate, setStatusDate] = useState('2024-04-06T02:56');
 const [arrivalDate, setArrivalDate] = useState('2024-04-06T02:56');

 const { register, handleSubmit, formState: { errors }, reset } = useForm();

 if (isCreating || isLoading) return <Spinner />;


 const disable = errors.name || errors.sCountry || errors.sAddress || errors.sPhone || errors.sEmail || errors.rName || errors.rCountry || errors.rAddress || errors.rPhone || errors.rEmail || errors.description || errors.weight;




 const onSubmit = data => {
  create({ ...data, statusDate, arrivalDate, author: user?.email }, {
   onSuccess: () => {
    reset();
    navigate(`/dashboard`);
   }
  });
 };


 return (
  <div className=" text-neutral-900 p-4">

   <Form onSubmit={handleSubmit(onSubmit)}   >

    <div className=' grid md:grid-cols-3 sm:gap-x-4 gap-x-8 gap-y-8'>
     <div className=" md:col-span-3 text-xl font-bold">Tracking ID</div>

     <div className=" grid gap-4 ">
      <label htmlFor="trackingId">Tracking ID</label>
      <input type="text" id='trackingId' {...register('trackingId', { required: true })} className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Enter tracking ID" />
     </div>

     <div className=" md:col-span-3 text-xl font-bold">Sender&apos;s Details</div>

     <div className=" grid gap-4 ">
      <label htmlFor="fullName">Full Name</label>
      <input type="text" id='fullName' {...register('fullName', { required: true })} className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="name" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="country">Country</label>
      <input {...register('country', { required: true })} type="text" id='country' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="country" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="state">State</label>
      <input {...register('state', { required: true })} type="text" id='state' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="country" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="address">Address</label>
      <input {...register('address', { required: true })} type="text" id='address' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="address" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="number">Phone Number</label>
      <input {...register('number', { required: true })} type="text" id='number' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="phone" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="email">Email</label>
      <input {...register('email', { required: true })} type="email" id='email' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="email" />
     </div>

     <div className=" md:col-span-3 text-xl font-bold">Receiver&apos;s Details</div>

     <div className=" grid gap-4 ">
      <label htmlFor="rFullName">Full Name</label>
      <input type="text" id='rFullName' {...register('rFullName', { required: true })} className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="name" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rCountry">Country</label>
      <input {...register('rCountry', { required: true })} type="text" id='rCountry' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="country" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rState">State</label>
      <input {...register('rState', { required: true })} type="text" id='rState' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="country" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rAddress">Address</label>
      <input {...register('rAddress', { required: true })} type="text" id='rAddress' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="address" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rNumber">Phone Number</label>
      <input {...register('rNumber', { required: true })} type="text" id='rNumber' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="phone number" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="rEmail">Email</label>
      <input {...register('rEmail', { required: true })} type="email" id='rEmail' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Email" />
     </div>

     <div className=" md:col-span-3 text-xl font-bold">Shipment Details</div>

     <div className=" grid gap-4 ">
      <label htmlFor="packageName">Package Name</label>
      <input {...register('packageName', { required: true })} type="text" id='packageName' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Package name" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="units">Units</label>
      <input {...register('units', { required: true })} type="number" id='units' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="units" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="quantity">Quantity</label>
      <input {...register('quantity', { required: true })} type="number" id='weight' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="quantity" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="price">Price</label>
      <input {...register('price', { required: true })} type="number" id='weight' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="price" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="destination">Destination</label>
      <input {...register('destination', { required: true })} type="text" id='destination' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Destination" />
     </div>

     <div className="grid gap-4">
      <label htmlFor="arrivalDate">Arrival Date & Time</label>
      <input className="focus:border-blue-500 border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none border-b p-2" type="datetime-local" value={arrivalDate
       // .toISOString().slice(0, -8)
      } onChange={e => setArrivalDate(new Date(e.target.value).toISOString().slice(0, -8))} />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="cFullName">Courier Full Name</label>
      <input {...register('cFullName', { required: true })} type="text" id='cFullName' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Courier Full Name" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="cEmail">Courier Email</label>
      <input {...register('cEmail', { required: true })} type="text" id='cEmail' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Email" />
     </div>


     <div className=" grid gap-4 ">
      <label htmlFor="cNumber">Courier Phone Number</label>
      <input {...register('cNumber', { required: true })} type="text" id='cNumber' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Courier Phone Number" />
     </div>

     <div className=" md:col-span-3 text-xl font-bold">Shipment Current Status</div>

     <div className="grid gap-4">
      <label htmlFor="statusDate">Status Date</label>
      <input className="focus:border-blue-500 border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none border-b p-2" type="datetime-local" value={statusDate
       // .toISOString().slice(0, -8)
      } onChange={e => setStatusDate(new Date(e.target.value).toISOString().slice(0, -8))} />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="sLocation">Status Location</label>
      <input {...register('sLocation', { required: true })} type="text" id='sLocation' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Location" />
     </div>

     <div className=" grid gap-4 ">
      <label htmlFor="currentStatus">Current Status</label>
      <input {...register('currentStatus', { required: true })} type="text" id='currentStatus' className=' border-b border-neutral-900 duration-500 transition-all focus:border-b-2 outline-none py-2 focus:border-blue-500' placeholder="Current Status" />
     </div>




    </div>

    <div className=" py-10 flex justify-center items-center gap-3 sm:gap-8">

     <button disabled={disable || isCreating} type='submit' className=' bg-indigo-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-indigo-500 font-bold flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-neutral-600'>
      <FaCheck className=' text-2xl' />Submit
     </button>

     <button disabled={isCreating} type='reset' className=' bg-yellow-500 py-2 text-neutral-100 rounded-full px-4 hover:bg-yellow-400 font-bold flex items-center gap-2'><MdCancel className=' text-2xl' />Clear</button>

     <Link type='button' to={-1} className=' bg-neutral-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-neutral-500 font-bold flex items-center gap-2 '>Back <FaArrowLeftLong className=' text-2xl' /></Link>

    </div>

   </Form>
  </div>
 );
};

export default CreateForm;