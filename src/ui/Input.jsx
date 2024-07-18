// import styled from "styled-components";
// const Input = styled.input`
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="border border-gray-300 bg-white rounded-lg px-[1.2rem] py-[0.8rem] shadow-sm focus:border-indigo-600"
    />
  );
});
Input.displayName = "Input";
export default Input;
