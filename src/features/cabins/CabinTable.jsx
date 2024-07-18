import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
// import styled from "styled-components";
// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function CabinTable() {
  const Table = ({ children }) => (
    <div className="border border-solid border-gray-200 text-2xl bg-gray-50 overflow-hidden rounded-md ">
      {children}
    </div>
  );

  const TableHeader = ({ children }) => (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-[2.4rem] place-items-center bg-[#f9fafb] border-b border-solid border-gray-100 uppercase tracking-widest font-semibold text-gray-600 py-[1.6rem] px-6">
      {children}
    </div>
  );

  const { isPending, data: cabins } = useQuery({
    queryKey: ["getCabins"],
    queryFn: getCabins,
  });
  if (isPending) return <Spinner />;

  return (
    <Table>
      <TableHeader>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
