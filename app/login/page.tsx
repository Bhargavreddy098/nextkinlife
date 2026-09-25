import { redirect } from "next/navigation";
import { LOGIN_URL } from "@/lib/site";

/**
 * Sign-in lives in the product. This route exists so the marketing site's
 * "Login" links resolve to a real page instead of a 404.
 */
export default function LoginPage() {
  redirect(LOGIN_URL);
}
