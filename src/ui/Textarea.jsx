import { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => (
  <textarea
    {...props}
    ref={ref}
    className="focus:border-[#4338ca] px-[1.2rem] py-[0.8rem] border border-gray-300 bg-white shadow-sm w-full h-[8rem] rounded-lg"
  />
));
Textarea.displayName = "Textarea";
export default Textarea;
