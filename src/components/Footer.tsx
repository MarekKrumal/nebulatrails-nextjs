import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="max-w-3xl mx-auto flex gap-3 p-3">
        <Link href="/footer">Footer</Link>
      </nav>
    </footer>
  );
}