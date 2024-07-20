// import styled from "styled-components";

import { forwardRef } from "react";

// const FileInput = styled.input`
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-sm);

//   &::file-selector-button {
//     font: inherit;
//     font-weight: 500;
//     padding: 0.8rem 1.2rem;
//     margin-right: 1.2rem;
//     border-radius: var(--border-radius-sm);
//     border: none;
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);
//     cursor: pointer;
//     transition: color 0.2s, background-color 0.2s;

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   }
// `;

const FileInput = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    type="file"
    className="text-2xl rounded-md file:font-medium file:px-[1.2rem] file:py-[0.8rem] file:mr-[1.2rem] file:rounded-md file:border-0 file:text-[#eef2ff] file:bg-[#4f46e5] file:cursor-pointer file:transition-all file:duration-200 file:hover:bg-[#4338ca]"
  />
));
FileInput.displayName = "FileInput";
export default FileInput;
