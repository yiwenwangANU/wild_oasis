// import styled from "styled-components";

// const StyledDataItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
//   padding: 0.8rem 0;
// `;

// const Label = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   font-weight: 500;

//   & svg {
//     width: 2rem;
//     height: 2rem;
//     color: var(--color-brand-600);
//   }
// `;

function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-[1.6rem] px-0 py-[0.8rem]">
      <span className="flex items-center gap-[0.8rem] font-medium">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
