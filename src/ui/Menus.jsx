import { createContext, forwardRef, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

const Menu = ({ children }) => {
  return <div className="flex items-center justify-items-end">{children}</div>;
};

const StyledToggle = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-none border-0 p-[0.4rem] rounded-sm translate-x-[0.8rem] transition-all duration-200 hover:bg-[#f3f4f6]"
    >
      {children}
    </button>
  );
};

const StyledList = forwardRef(({ children, position, ...rest }, ref) => {
  const { x, y } = position;
  return (
    <ul
      {...rest}
      ref={ref}
      className="fixed bg-white shadow-md rounded-md"
      style={{ right: `${x}px`, top: `${y}px` }}
    >
      {children}
    </ul>
  );
});
StyledList.displayName = "StyledList";
const StyledButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="w-full text-left bg-none border-0 px-[2.4rem] py-[1.2rem] text-2xl transition-all duration-200 flex items-center gap-[1.6rem] hover:bg-[#f9fafb]"
    >
      {children}
    </button>
  );
};

const MenusContext = createContext();
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    console.log(rect);
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    if (openId === "" || openId !== id) {
      return open(id);
    } else {
      return close();
    }
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}
function List({ children, id }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);
  if (openId !== id) {
    return null;
  } else {
    return createPortal(
      <StyledList position={position} ref={ref}>
        {children}
      </StyledList>,
      document.body
    );
  }
}
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
