import { BadRequest } from "@/components/bad-request/BadRequest";
import Page from "./page.client";
import { getUserAgent, find_product_id } from "@/utils/functions/buttonMain";
import { Suspense } from "react";
import { Loader } from "@/components/loader/Loader";
import { headers } from "next/headers";

export default async function ProductData({ params }: { params: { slug: string } }) {
  // const getUA = headers().get("user-agent");
  // const ua = getUserAgent(getUA);
  // console.log(ua, "useragent");
  // const isMobile = ua.device;
  // console.log(isMobile, "IS MOBILE");


 

  const product = await find_product_id(params.slug)
    
  if (!product) return <BadRequest />;

  return (
    <Suspense key={params.slug} fallback={<Loader />}>
        <Page product={product}/>
    </Suspense>
  )
}