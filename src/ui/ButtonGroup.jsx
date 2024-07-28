// import styled from "styled-components";

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 1.2rem;
//   justify-content: flex-end;
// `;
const ButtonGroup = ({ children }) => {
  return <div className="flex justify-end gap-[1.2rem]">{children}</div>;
};
export default ButtonGroup;
