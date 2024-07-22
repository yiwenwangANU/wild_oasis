import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getCabins"] });
      toast.success("Cabin successfully edited!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}

export default useUpdateCabin;
