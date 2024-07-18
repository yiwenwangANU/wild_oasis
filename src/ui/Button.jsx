// import styled, { css } from "styled-components";

// const sizes = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//     text-transform: uppercase;
//     font-weight: 600;
//     text-align: center;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//     font-weight: 500;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//     font-weight: 500;
//   `,
// };

// const variations = {
//   primary: css`
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   `,
//   secondary: css`
//     color: var(--color-grey-600);
//     background: var(--color-grey-0);
//     border: 1px solid var(--color-grey-200);

//     &:hover {
//       background-color: var(--color-grey-50);
//     }
//   `,
//   danger: css`
//     color: var(--color-red-100);
//     background-color: var(--color-red-700);

//     &:hover {
//       background-color: var(--color-red-800);
//     }
//   `,
// };
// const Button = styled.button`
//   border: none;
//   border-radius: var(--border-radius-sm);
//   box-shadow: var(--shadow-sm);

//   ${(props) => sizes[props.size]}
//   ${(props) => variations[props.variation]}
// `;

// Button.defaultProps = {
//   variation: "primary",
//   size: "medium",
// };

const Button = ({ size, variation, children, ...rest }) => {
  const sizes = {
    small: "text-sm py-1 px-2 uppercase font-semibold text-center",
    medium: "text-2xl py-3 px-4 font-semibold",
    large: "text-lg py-3 px-6 font-medium",
  };

  const variations = {
    primary: "text-[#eef2ff] bg-[#4f46e5] hover:bg-#4338ca",
    secondary:
      "text-gray-600 bg-gray-0 border border-gray-200 hover:bg-gray-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  const sizeClass = size ? sizes[size] : sizes.medium;
  const variationClass = variation ? variations[variation] : variations.primary;
  const styles = `${sizeClass} ${variationClass} border-0 rounded-md shadow-sm`;

  return (
    <button {...rest} className={styles}>
      {children}
    </button>
  );
};
export default Button;
