"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import type { Post } from "@prisma/client";
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(10).max(255),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export const createPost = async (
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signedin to do this."],
      },
    };
  }

  return {
    errors: {},
  };
};
