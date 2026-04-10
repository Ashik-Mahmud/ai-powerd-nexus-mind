import RegisterComponent from "@/src/components/auth/Register";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Register - Nexus Mind",
  description: "Create your Nexus Mind account",
};

export default async function Register() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <RegisterComponent />
  );
}
