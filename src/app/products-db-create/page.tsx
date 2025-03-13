import { redirect } from "next/navigation";
import { addProduct } from "../prisma-db";
import { Submit } from "../components/Submit";

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    await addProduct(title, price, description);
    redirect("/products-db");
  }
  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
          />
        </label>
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded  bg-white"
            name="price"
          />
        </label>
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded  bg-white"
            name="description"
          />
        </label>
      </div>
      {/* <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Submit
      </button> */}
      <Submit />
    </form>
  );
}
