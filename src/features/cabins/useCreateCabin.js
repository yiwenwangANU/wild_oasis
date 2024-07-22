import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
  const queryClient = useQueryClient();
  // @react-query: Mutation
  const { isPending: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getCabins"] });
      toast.success("New cabin successfully created!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}

export default useCreateCabin;
