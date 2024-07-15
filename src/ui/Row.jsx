function Row({ type, children }) {
  if (type === "horizontal")
    return (
      <div className="flex justify-between place-items-center">{children}</div>
    );
  else return <div className="flex flex-col gap-6">{children}</div>;
}

export default Row;
