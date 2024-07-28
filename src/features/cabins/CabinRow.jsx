import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
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
  const { isCreating, createCabin } = useCreateCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    discount,
    image,
    regularPrice,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      discount,
      image,
      regularPrice,
      description,
    });
  }
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
          <button onClick={() => handleDuplicate()} disabled={isCreating}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((showForm) => !showForm)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm cabinToEdit={cabin} />
        </Modal>
      )}
    </>
  );
}

export default CabinRow;
