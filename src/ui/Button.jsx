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
