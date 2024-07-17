import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useState } from "react";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <img src="https://kyjkvmtqkfvbenttjrma.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg" /> */}
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add new Cabin
        </Button>
      </Row>
    </>
  );
}

export default Cabins;
