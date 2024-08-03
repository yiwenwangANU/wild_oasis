import { useSearchParams } from "react-router-dom";

const StyledFilter = ({ children }) => {
  return (
    <div className="border border-[#f3f4f6] bg-white shadow-sm rounded-md p-[0.4rem] flex gap-[0.4rem]">
      {children}
    </div>
  );
};

const FilterButton = ({ children, active, ...rest }) => {
  const styles =
    "border-0 rounded-md font-semibold text-2xl px-[0.8rem] py-[0.44rem] transition-all duration-300 disabled:text-[#eef2ff] disabled:bg-[#6366f1] hover:text-[#eef2ff] hover:bg-[#6366f1]";
  return (
    <button
      {...rest}
      className={
        active ? `${styles} bg-[#4f46e5] text-[#eef2ff]` : `${styles} bg-white`
      }
    >
      {children}
    </button>
  );
};

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options[0].value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          active={option.value === currentFilter}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
