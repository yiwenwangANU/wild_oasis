// import styled, { css } from "styled-components";

// const Form = styled.form`
//   ${(props) =>
//     props.type !== "modal" &&
//     css`
//       padding: 2.4rem 4rem;

//       /* Box */
//       background-color: var(--color-grey-0);
//       border: 1px solid var(--color-grey-100);
//       border-radius: var(--border-radius-md);
//     `}

//   ${(props) =>
//     props.type === "modal" &&
//     css`
//       width: 80rem;
//     `}

//   overflow: hidden;
//   font-size: 1.4rem;
// `;

const Form = ({ children, type }) => {
  if (type == "modal")
    return (
      <form className="overflow-hidden text-2xl w-[80rem]">{children}</form>
    );
  else
    return (
      <form className="overflow-hidden text-2xl py-[2.4rem] px-[4rem] bg-[#fff] border-solid border-gray-100 rounded-md border-2">
        {children}
      </form>
    );
};
export default Form;
