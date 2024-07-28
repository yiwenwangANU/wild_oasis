// import styled from "styled-components";

// export const Flag = styled.img`
//   max-width: 2rem;
//   border-radius: var(--border-radius-tiny);
//   display: block;
//   border: 1px solid var(--color-grey-100);
// `;

export const Flag = ({ ...rest }) => {
  return (
    <img
      {...rest}
      className="max-w-[2rem] rounded-sm block border-[1px] border-solid border-[#f3f4f6]"
    />
  );
};
