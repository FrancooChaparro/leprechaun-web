import { BadRequest } from "@/components/bad-request/BadRequest";
import Page from "./page.client";
import { productId } from "@/utils/functions/buttonMain";
import { Suspense } from "react";
import { Loader } from "@/components/loader/Loader";

export default async function ProductData({ params }: { params: { slug: string } }) {
   
  const product = await productId(params.slug)
    
  if (!product) return <BadRequest />;

  return (
    <Suspense key={params.slug} fallback={<Loader />}>
        <Page product={product}/>
    </Suspense>
  )
}