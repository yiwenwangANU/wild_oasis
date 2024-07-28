// import styled from 'styled-components';

// const ButtonText = styled.button`
//   color: var(--color-brand-600);
//   font-weight: 500;
//   text-align: center;
//   transition: all 0.3s;
//   background: none;
//   border: none;
//   border-radius: var(--border-radius-sm);

//   &:hover,
//   &:active {
//     color: var(--color-brand-700);
//   }
// `;

const ButtonText = ({ children, ...rest }) => {
  return (
    <button
      className="text-[#4f46e5] font-medium text-center transition-all duration-300 border-0 roudned-sm hover:text-[#4338ca] active:text-[#4338ca]"
      {...rest}
    >
      {children}
    </button>
  );
};
export default ButtonText;
