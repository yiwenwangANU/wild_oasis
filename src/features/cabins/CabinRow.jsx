import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
const TableRow = ({ children }) => (
  <div className="grid bg-white grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-6 place-items-center py-3.5 px-6 border-b last:border-b-0 border-gray-200">
    {children}
  </div>
);

const Img = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="block w-16 aspect-[3/2] object-cover object-center transform scale-[1.5] -translate-x-[7px]"
  />
);

const Cabin = ({ children }) => (
  <div className="font-semibold text-gray-600 font-mono">{children}</div>
);

const Price = ({ children }) => (
  <div className="font-mono font-semibold">{children}</div>
);

const Discount = ({ children }) => (
  <div className="font-mono font-medium text-green-700">{children}</div>
);

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    discount,
    image,
    regularPrice,
  } = cabin;

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fit up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={() => setShowForm((showForm) => !showForm)}>
            Edit
          </button>
          <button
            className="text-red-600 bg-red-100 rounded-md px-5 py-2.5 text-lg uppercase font-semibold"
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
