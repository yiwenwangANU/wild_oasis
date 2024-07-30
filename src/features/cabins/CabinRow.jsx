import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = ({ ...rest }) => (
  <img
    {...rest}
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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
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
      <Table.Row>
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
          <button
            onClick={() => {
              setShowDeleteConfirm(true);
            }}
            disabled={isDeleting}
          >
            <HiTrash />
          </button>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button>Duplicate</Menus.Button>
              <Menus.Button>Edit</Menus.Button>
              <Menus.Button>Delete</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </Table.Row>
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <CreateCabinForm
            cabinToEdit={cabin}
            onClose={() => setShowForm(false)}
          />
        </Modal>
      )}
      {showDeleteConfirm && (
        <Modal onClose={() => setShowDeleteConfirm(false)}>
          <ConfirmDelete
            resourceName="cabins"
            disabled={isDeleting}
            onConfirm={() => deleteCabin(cabinId)}
            onClose={() => setShowDeleteConfirm(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default CabinRow;
