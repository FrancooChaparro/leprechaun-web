import {revalidateTag} from "next/cache";

export async function GET() {
  revalidateTag("productos");

  return Response.json({revalidated: true});
}