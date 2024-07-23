import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: editSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      // Invalidate and refetch
      toast.success("Setting successfully updated!");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editSetting };
}

export default useUpdateSetting;
