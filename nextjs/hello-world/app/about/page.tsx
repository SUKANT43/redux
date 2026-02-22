"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  function click() {
    router.push("/");
  }

  return (
    <div>
      <button className="bg-blue-500" onClick={click}>
        Back
      </button>

      <h1>About Page</h1>

      <Link href="/">Home</Link>
    </div>
  );
}