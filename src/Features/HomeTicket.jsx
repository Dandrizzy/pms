
import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "../ui/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency, formatDate } from "../Hooks/helpers";
import { Button } from "@radix-ui/themes";
import { FaMapLocationDot } from "react-icons/fa6";
import Error404 from "../ui/404";


const HomeTicket = () => {

  const navigate = useNavigate();
  const { alphaCode: ticketId } = useParams();



  const { getSpecific } = useGetSpecificApi({ key: 'pmsTicket', ticketId });

  const { data = [], isFetching } = useGetSpecific({ key: ['pmsTicket', ticketId], fn: getSpecific });

  // const { getSpecific } = useGetSpecificApi({ key: 'ticket', ticketId });

  // const { data = [], isFetching } = useGetSpecific({ key: ['ticket', ticketId], fn: getSpecific });

  if (isFetching) return <Spinner />;

  if (data?.data === undefined) return <Error404 />;

  const { fullName, email, country, address, state, number, rCountry, rEmail, rFullName, rNumber, rAddress, rState, packageName, units, quantity, price, destination, trackingId, cEmail, cFullName, cNumber, sLocation, currentStatus, arrivalDate, statusDate } = data.data;

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
      <div className=" flex justify-center items-center my-6">
        <Button color="green" size='3' radius="full" onClick={() => navigate(`/customer/${ticketId}`)}>
          <FaMapLocationDot />
          Show on map</Button>
      </div>
    </>
  );
};

export default HomeTicket;