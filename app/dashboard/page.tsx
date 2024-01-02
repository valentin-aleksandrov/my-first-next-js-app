import Link from "next/link";
import { Links } from "../components/links";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Links />
      Dashboard page
      <Link href="/contacts">Contacts</Link>
    </main>
  );
}
