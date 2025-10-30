import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>The wild Oasis. Welcome to paradise.</h1>

      <Link href="/cabins">Explore Luxury Cabins</Link>
    </div>
  );
}
