// import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

// const StyledConfirmDelete = styled.div`
//   width: 40rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;

//   & p {
//     color: var(--color-grey-500);
//     margin-bottom: 1.2rem;
//   }

//   & div {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

function ConfirmDelete({ resourceName, onConfirm, disabled }) {
  return (
    <div className="w-[40rem] flex flex-col gap-[1.2rem]">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p className="text-[#6b7280] mb-[1.2rem]">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button variation="secondary" disabled={disabled}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
