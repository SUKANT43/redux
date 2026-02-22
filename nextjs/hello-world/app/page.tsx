import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-red-50">

      <h1>hello</h1>
      <Link href="/about" className="text-blue-600">about</Link>
    </div>
  );
}
