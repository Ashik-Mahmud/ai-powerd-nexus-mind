
import LoginComponent from "@/src/components/auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Nexus Mind",
    description: "Sign in to your Nexus Mind account",
};

export default function Login() {
    return <LoginComponent />;
}

