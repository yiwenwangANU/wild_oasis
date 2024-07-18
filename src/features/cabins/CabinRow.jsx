import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
const TableRow = ({ children }) => (
  <div className="grid bg-white grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-6 place-items-center py-3.5 px-6 border-b last:border-b-0 border-gray-200">
    {children}
  </div>
);

const Img = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="block w-16 aspect-[3/2] object-cover object-center transform scale-[1.5] -translate-x-[7px]"
  />
);

const Cabin = ({ children }) => (
  <div className="font-semibold text-gray-600 font-mono">{children}</div>
);

const Price = ({ children }) => (
  <div className="font-mono font-semibold">{children}</div>
);

const Discount = ({ children }) => (
  <div className="font-mono font-medium text-green-700">{children}</div>
);

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    discount,
    image,
    regularPrice,
  } = cabin;
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["getCabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fit up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button
        className="text-red-600 bg-red-100 rounded-md px-5 py-2.5 text-lg uppercase font-semibold"
        onClick={() => mutate(cabinId)}
        disabled={isPending}
      >
        Delete
      </button>
    </TableRow>
  );
}

export default CabinRow;
