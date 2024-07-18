const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="font-semibold">
    {children}
  </label>
);

const Error = ({ children }) => (
  <span className="text-2xl text-red-700">{children}</span>
);

function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-[2.4rem] py-[1.2rem] px-0 first:pt-0 last:pb-0 last:border-0 border-b border-[#f3f4f6] has-[button]:flex has-[button]:justify-end has-[button]:gap-[1.2rem]">
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormRow;
