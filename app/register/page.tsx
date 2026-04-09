import RegisterComponent from "@/src/components/auth/Register";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register - Nexus Mind",
  description: "Create your Nexus Mind account",
};

export default function Register() {
  return (
    <RegisterComponent />
  
  );
}
