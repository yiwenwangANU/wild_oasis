import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

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

const StyledList = ({ children, position, ...rest }) => {
  const { x, y } = position;
  return (
    <ul
      {...rest}
      className="fixed bg-white shadow-md rounded-md"
      style={{ right: `${x}px`, top: `${y}px` }}
    >
      {children}
    </ul>
  );
};

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
  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenusContext.Provider value={{ openId, close, open }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close } = useContext(MenusContext);
  function handleClick() {
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
  const { openId } = useContext(MenusContext);
  if (openId !== id) {
    return null;
  } else {
    return createPortal(
      <StyledList position={{ x: 20, y: 20 }}>{children}</StyledList>,
      document.body
    );
  }
}
function Button({ children }) {
  return (
    <li>
      <StyledButton>{children}</StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
