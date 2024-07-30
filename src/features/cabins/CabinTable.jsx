import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";

function CabinTable() {
  // const Table = ({ children }) => (
  //   <div className="border border-solid border-gray-200 text-2xl bg-gray-50 overflow-hidden rounded-md ">
  //     {children}
  //   </div>
  // );

  // const TableHeader = ({ children }) => (
  //   <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-[2.4rem] place-items-center bg-[#f9fafb] border-b border-solid border-gray-100 uppercase tracking-widest font-semibold text-gray-600 py-[1.6rem] px-6">
  //     {children}
  //   </div>
  // );

  const { isPending, cabins } = useCabins();
  if (isPending) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
