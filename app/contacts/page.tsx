"use client";
import Link from "next/link";
import { Links } from "../components/links";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Links />
      Contacts page
      <Link href="/dashboard">Dashboard</Link>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Go to Dashboard via the NextJS Router
      </button>
    </main>
  );
}
