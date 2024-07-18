// import styled from "styled-components";

import { forwardRef } from "react";

// const Textarea = styled.textarea`
//   padding: 0.8rem 1.2rem;
//   border: 1px solid var(--color-grey-300);
//   border-radius: 5px;
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-sm);
//   width: 100%;
//   height: 8rem;
// `;

const Textarea = forwardRef((props, ref) => (
  <textarea
    {...props}
    ref={ref}
    className="focus:border-[#4338ca] px-[1.2rem] py-[0.8rem] border border-gray-300 bg-white shadow-sm w-full h-[8rem] rounded-lg"
  />
));
Textarea.displayName = "Textarea";
export default Textarea;
