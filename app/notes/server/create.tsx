"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createNote } from "./action";

const initialState = {
  message: "",
  errors: {
    title: "",
    description: "",
  },
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer" disabled={pending}>
      Submit
    </button>
  );
}

export default function CreateForm() {
  const [state, formAction] = useActionState(createNote, initialState);
  console.log("state =>", state);
  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg mb-10 sticky top-0">
      <h2 className="text-xl font-semibold mb-4 ">Create Note</h2>

      {/* General Error Message */}
      {state && state.errors && state.errors.general && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{state.errors.general}</div>}

      <form className="space-y-4" action={formAction}>
        <div className="grid grid-cols-2 gap-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input type="text" name="title" placeholder="Input title ..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" />
            {state && state.errors && state.errors.title && <small className="text-red-500">{state.errors.title}</small>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea name="description" placeholder="Input description ..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" />
            {state && state.errors && state.errors.description && <small className="text-red-500">{state.errors.description}</small>}
          </div>

        </div>
          {/* Submit Button */}
          <SubmitButton />
      </form>
    </div>
  );
}
