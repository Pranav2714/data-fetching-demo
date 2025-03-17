import { removeProduct } from "@/actions/products";
import { getProducts } from "@/app/prisma-db";
import { useOptimistic } from "react";
import Link from "next/link";
import { Product, ProductDetail } from "./product-detail";
export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const products: Product[] = await getProducts(query);
  //   const [optimisticProducts,setOptimisticProducts]=useOptimistic(products,(currProducts,productId)=>{
  //     return currProducts.filter((product)=>product.id!==productId)});

  // }
  // const removeProductById=async(productId:number)=>{
  //   setOptimisticProducts(productId);
  //   await removeProduct(productId);
  // }

  return <ProductDetail products={products}></ProductDetail>;
}
