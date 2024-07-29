import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed top-1/2 left-1/2 bg-white rounded-lg shadow-lg px-[4rem] py-[3.2rem] transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </div>
  );
});
StyledModal.displayName = "StyledModal";

const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(255, 255, 255, 0.1)] z-10 transition-all duration-500 backdrop-blur-sm">
      {children}
    </div>
  );
};

const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="border-0 p-[0.4rem] rounded-sm transform translate-x-[0.8rem] absolute top-[1.2rem] right-[1.9rem] hover:bg-[#f3f4f6]"
    >
      {children}
    </button>
  );
};

function Modal({ children, onClose }) {
  const ref = useOutsideClick(onClose);
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
