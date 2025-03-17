"use client";

import Form from "next/form";

export default function Search() {
  return (
    <Form action={"/products-db"} className="flex items-center space-x-2">
      <input
        type="text"
        name={"query"}
        placeholder="Search Products..."
        className="border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </Form>
  );
}
