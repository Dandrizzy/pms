
import { useNavigate, useParams } from "react-router-dom";

import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "../ui/Spinner";
import { FaArrowLeftLong, FaMap } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDeleteApi } from "../Hooks/Delete/useDeleteApi";
import { useDelete } from "../Hooks/Delete/useDelete";
import { formatCurrency, formatDate } from "../Hooks/helpers";
import { Button } from "@radix-ui/themes";


const Ticket = () => {

 const navigate = useNavigate();

 const { deleteFn } = useDeleteApi({ key: 'pmsTicket' });

 const { deleteItem, isDeleting } = useDelete({ fn: deleteFn, key: ['pmsTicket'] });


 const { ticketId } = useParams();

 const { getSpecific } = useGetSpecificApi({ key: 'pmsTicket', ticketId });

 const { data = [], isFetching } = useGetSpecific({ key: ['pmsTicket', ticketId], fn: getSpecific });


 if (isFetching || isDeleting || data.data === undefined) return <Spinner />;


 const { fullName, email, country, address, state, number, rCountry, rEmail, rFullName, rNumber, rAddress, rState, packageName, units, quantity, price, destination, id, trackingId, cEmail, cFullName, cNumber, sLocation, currentStatus, arrivalDate, statusDate } = data.data;


 return (
  <>
   <div className=" gap-8 grid sm:grid-cols-2 p-4 text-neutral-900">
    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Sender&apos;s Information</h1>
     <p>Name: {fullName}</p>
     <p>Address: {address}</p>
     <p>Country: {country}</p>
     <p>Email: {email}</p>
     <p>Phone: {number}</p>
     <p>State: {state}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Recipient Information</h1>
     <p>Name: {rFullName}</p>
     <p>Address: {rAddress}</p>
     <p>Country: {rCountry}</p>
     <p>Email: {rEmail}</p>
     <p>Phone: {rNumber}</p>
     <p>State: {rState}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Shipment Details</h1>
     <p>Tracking ID: {trackingId}</p>
     <p>Package Name: {packageName}</p>
     <p>Units: {units}lbs</p>
     <p>Quantity: {quantity}</p>
     <p>Price: {formatCurrency(price)}</p>
     <p>Ticket ID: {ticketId}</p>
     <p>Destination: {destination}</p>
     <p>Arrival Date: {formatDate(arrivalDate)}</p>
     <p>Courier Full Name: {cFullName}</p>
     <p>Courier Email: {cEmail}</p>
     <p>Courier Phone Number: {cNumber}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Shipment Current Status</h1>
     <p>Status Date: {formatDate(statusDate)}</p>
     <p>Location: {sLocation}</p>
     <p>Current Status: {currentStatus}</p>


    </div>


   </div>

   <div className="grid gap-4 text-neutral-900 p-4">
    Status: {currentStatus}

   </div>

   <div className=" py-10 flex justify-center items-center flex-wrap gap-3 sm:gap-8">

    <Button size='3' radius="full" onClick={() => navigate(`/form/${id}`)} disabled={isDeleting} >
     <FaEdit className=' text-2xl' />Edit
    </Button>

    <Button size='3' color="red" radius="full" disabled={isDeleting} onClick={() => {
     deleteItem(id, { onSuccess: () => navigate('/dashboard') });
    }} > <MdDelete className=' text-2xl' /> Delete</Button>

    <Button size='3' color="crimson" radius="full" disabled={isDeleting} onClick={() => navigate(`/ticket/adminMap/${id}`)
    } > <FaMap className=' text-2xl' /> View map</Button>

    <Button onClick={() => navigate('/dashboard')} size='3' radius="full" color="gray" disabled={isDeleting} > <FaArrowLeftLong className=' text-2xl' />Back</Button>

   </div>
  </>
 );
};

export default Ticket;