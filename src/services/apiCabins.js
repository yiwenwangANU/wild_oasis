import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded!");
  }
  return data;
}
// get newCabin when create cabin, get newCabin & id when edit cabin
export async function createEditCabin(newCabin) {
  console.log("API create cabin");
  const id = newCabin.id;
  const hasImagePath = newCabin.image?.includes?.("http");
  const imageName = `${Math.random()}-${newCabin.image[0].name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query;

  if (!id) {
    console.log("create cabin");
    query = supabase.from("cabins").insert([{ ...newCabin, image: imagePath }]); // create cabin
  } else {
    console.log("edit cabin");
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id); // edit cabin
  }
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error(`Cabin could not be ${id ? "updated" : "created"}`);
  }

  // upload image
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image[0]);

    // delete the cabin if there is error in uploading corresponding image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and cabin was not created"
      );
    }
  }

  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
}
