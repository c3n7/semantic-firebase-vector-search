import { cookies } from "next/headers";
import { ProductsListing } from "./listing";
import { SESSION_COOKIE_NAME } from "@/constants";

export default function Page() {
  const session: string | null =
    cookies().get(SESSION_COOKIE_NAME)?.value || null;

  return <ProductsListing session={session} />;
}
