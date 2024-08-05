const StyledSelect = ({ type, children, ...rest }) => (
  <select
    {...rest}
    className={`text-2xl px-[1.2rem] py-[0.8rem] border rounded-sm bg-white font-semibold shadow-sm ${
      type === "white" ? "border-[#f3f4f6]" : "border-[#d1d5db]"
    }`}
  >
    {children}
  </select>
);

function Select({ options, value, ...rest }) {
  return (
    <StyledSelect value={value} {...rest}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
