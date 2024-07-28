import Button from "../../ui/Button";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
        Add new Cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
