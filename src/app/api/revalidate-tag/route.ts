import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("path");

  return new Response("ok");
}
