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
