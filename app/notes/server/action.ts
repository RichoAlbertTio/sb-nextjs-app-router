"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

type FieldErrors = {
  [key: string]: string[];
};

export async function createNote(
  prevState: {
    message: string;
    errors: object;
  },
  formData: FormData
) {
  const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
  });

  const parse = formSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!parse.success) {
    // pakai flatten() untuk dapatkan fieldErrors
    const fieldErrors : FieldErrors = parse.error.flatten().fieldErrors;

    // ambil error pertama dari setiap field
    // const errors = Object.keys(fieldErrors).reduce(
    //   (acc, key) => {
    //     acc[key] = fieldErrors[key]?.[0] || "Unknown error";
    //     return acc;
    //   },
    //   {} as Record<string, string>
    // );


      // Ubah array menjadi string
     const formattedErrors: Record<string, string> = {};
      for (const key in fieldErrors) {
        if (fieldErrors[key] && fieldErrors[key].length > 0) {
          formattedErrors[key] = fieldErrors[key][0];
        }
      }

    return {
      errors: formattedErrors,
    };
  }

  try {
    await fetch("https://service.pace11.my.id/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parse.data),
    }).then((res) => res.json());

    revalidatePath("/notes/server");

    return { message: "Added successfully" };
  } catch (error) {
    console.error("Failed to create note:", error);
    return { message: "Failed to create note" };
  }
}

