import { FaTimes } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useGetApi } from "../Hooks/Get/useGetApi";
import { useGet } from "../Hooks/Get/useGet";
import Spinner from "../ui/Spinner";
import { Table } from "@radix-ui/themes";

const Admin = () => {
 const navigate = useNavigate();

 const { fetch } = useGetApi({ key: 'pmsTicket' });
 const { isFetching, fetch: fetchData = [] } = useGet({ key: ['pmsTicket'], fn: fetch });


 const filteredData = fetchData.filter(item => item.author === 'pms');



 if (isFetching) return <Spinner />;


 return (
  <div className=" sm:p-4 text-neutral-900">

   <Table.Root>
    <Table.Header>
     <Table.Row>
      <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Tracking Id</Table.ColumnHeaderCell>
     </Table.Row>
    </Table.Header>

    <Table.Body>
     {filteredData.map(item => <Table.Row className=" cursor-pointer" key={item.id} onClick={() => navigate(`/ticket/${item.trackingId}`)}>
      <Table.RowHeaderCell>{item.rFullName}</Table.RowHeaderCell>
      <Table.Cell>{item.rEmail}</Table.Cell>
      <Table.Cell>{item.trackingId}</Table.Cell>
     </Table.Row>)}
    </Table.Body>
   </Table.Root>

   <button onClick={() => navigate('/form')} className=" h-16 w-16 text-blue-600 fixed bottom-8 right-8 rounded-full">
    <FaTimes className=" text-5xl rotate-45 cursor-pointer" />
   </button>

  </div>
 );
};

export default Admin;