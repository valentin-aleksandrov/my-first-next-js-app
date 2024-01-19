"use client";
import Link from "next/link";
import { Links } from "../components/links";
import { useSearchParams } from "next/navigation";

function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
    </>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Links />
      Dashboard page
      <Link href="/contacts">Contacts</Link>
      <SortProducts />
    </main>
  );
}
