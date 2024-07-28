import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const StyledModal = ({ children }) => {
  return (
    <div className="fixed top-1/2 left-1/2 bg-white rounded-lg shadow-lg px-[4rem] py-[3.2rem] transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
};

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
// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
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
