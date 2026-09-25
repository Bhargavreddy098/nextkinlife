import { redirect } from "next/navigation";
import { SIGNUP_URL } from "@/lib/site";

/**
 * Workspace creation lives in the product. Every "Get Started" and "Book a
 * Demo" CTA resolves here, so no call to action is ever a dead end.
 */
export default function SignupPage() {
  redirect(SIGNUP_URL);
}
