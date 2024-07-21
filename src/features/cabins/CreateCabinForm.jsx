import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input.jsx";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow.jsx";
import { createEditCabin } from "../../services/apiCabins.js";

// if without cabinToEdit prop, display create cabin form
// if with cabinToEdit prop, display the form with default values filled
// cabinToEdit do not contain image data
function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValue } = cabinToEdit;
  const isEditting = Boolean(editId);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: isEditting ? editValue : {} });

  // @react-query: Access the client
  const queryClient = useQueryClient();
  // @react-query: Mutation
  const { isPending: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getCabins"] });
      toast.success("New cabin successfully created!");
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["getCabins"] });
      toast.success("Cabin successfully edited!");
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    if (!isEditting) {
      createCabin({ ...data });
    }
    if (isEditting) {
      editCabin({ ...data });
    }
    // mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      {isEditting && <input type="hidden" value={editId} {...register("id")} />}
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating || isEditing}
          {...register("name", {
            required: "this field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating || isEditing}
          {...register("maxCapacity", {
            required: "this field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating || isEditing}
          {...register("regularPrice", {
            required: "this field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating || isEditing}
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "Discount should be less than the regular price",
          })}
        />
      </FormRow>
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isCreating || isEditing}
          defaultValue=""
          {...register("description", { required: "this field is required" })}
        />
      </FormRow>
      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          {...register("image", {
            required: isEditting ? false : "this field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating || isEditing}>
          {isEditting ? "Update Cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
