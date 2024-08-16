import { page_routes } from "@/lib/routes-config";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/docs/${page_routes[0].href}`);
}
