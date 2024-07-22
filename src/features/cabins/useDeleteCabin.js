import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["getCabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}

export default useDeleteCabin;
