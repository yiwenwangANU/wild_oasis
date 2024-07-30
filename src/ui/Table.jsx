import { createContext, useContext } from "react";

const StyledTable = ({ children }) => {
  return (
    <div className="border border-[#e5e7eb] text-2xl bg-white rounded-md overflow-hidden">
      {children}
    </div>
  );
};

const CommonRow = ({ children, columns, className = "" }) => {
  const gridTemplateColumns = columns;
  return (
    <div
      className={`grid gap-[2.4rem] items-center transition-none ${className}`}
      style={{ gridTemplateColumns }}
    >
      {children}
    </div>
  );
};

const StyledHeader = ({ children, columns }) => {
  return (
    <CommonRow
      columns={columns}
      className="px-[2.4rem] py-[1.6rem] bg-[#f9fafb] border-b border-b-[#f3f4f6] uppercase tracking-wide text-2xl text-[#4b5563]"
    >
      {children}
    </CommonRow>
  );
};

const StyledRow = ({ children, columns }) => {
  return (
    <CommonRow
      columns={columns}
      className="px-[2.4rem] py-[1.2rem] border-b border-b-[#f3f4f6] last:border-0"
    >
      {children}
    </CommonRow>
  );
};

const StyledBody = ({ children }) => {
  return <section className="my-[0.4rem] mx-0">{children}</section>;
};

const Footer = ({ children }) => {
  if (!children) return null;
  else
    return (
      <footer className="bg-[#f9fafb] flex items-center p-[1.2rem]">
        {children}
      </footer>
    );
};

const Empty = ({ children }) => {
  return <p className="text-2xl text-center m-[2.4rem]">{children}</p>;
};

const tableContext = createContext();
function Table({ children, columns }) {
  return (
    <tableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </tableContext.Provider>
  );
}
function Header({ children }) {
  const { columns } = useContext(tableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}
function Row({ children }) {
  const { columns } = useContext(tableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}
function Body({ data, render }) {
  if (!data) return <Empty>No data to show this moment.</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
