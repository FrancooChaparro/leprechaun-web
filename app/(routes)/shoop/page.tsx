import Shoop from "./page.client";
import { globalData } from "@/utils/functions/buttonMain";
import { Suspense } from "react";
import { Loader } from "@/components/loader/Loader";

export default async function ShoopServer() {

  const products =  await globalData();

  return (
    <Suspense key={null} fallback={<Loader />}>
        <Shoop products={products}/>
    </Suspense>
  )
}
