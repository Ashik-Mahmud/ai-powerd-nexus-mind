import LoginComponent from "@/src/components/auth/Login";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Login - Nexus Mind",
    description: "Sign in to your Nexus Mind account",
};

export default async function Login() {
    const { userId } = await auth();
    
    if (userId) {
        redirect("/dashboard");
    }
    
    return <LoginComponent />;
}

