function Heading({ as, children }) {
  switch (as) {
    case "h1":
      return <h1 className="font-semibold text-5xl">{children}</h1>;
    case "h2":
      return <h2 className="font-semibold text-red-3xl">{children}</h2>;
    case "h3":
      return <h3 className="font-medium text-red-3xl">{children}</h3>;
    default:
      return <p>{children}</p>;
  }
}

export default Heading;
