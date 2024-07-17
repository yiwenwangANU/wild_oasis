export default function Spinner() {
  return (
    <div
      className="inline-block h-[6.4rem] w-[6.4rem] animate-spin rounded-full border-[12px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] my-[4.8rem] mx-auto"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
