// import styled from "styled-components";

// const StyledSelect = styled.select`
//   font-size: 1.4rem;
//   padding: 0.8rem 1.2rem;
//   border: 1px solid
//     ${(props) =>
//       props.type === "white"
//         ? "var(--color-grey-100)"
//         : "var(--color-grey-300)"};
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-0);
//   font-weight: 500;
//   box-shadow: var(--shadow-sm);
// `;

const StyledSelect = ({ type, children, ...rest }) => (
  <select
    {...rest}
    className={`text-2xl px-[1.2rem] py-[0.8rem] border rounded-sm bg-white font-medium shadow-sm ${
      type === "white" ? "text-[#f3f4f6]" : "text-[#d1d5db]"
    }`}
  >
    {children}
  </select>
);
