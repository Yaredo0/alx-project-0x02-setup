// components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
      <h1>My Project Header</h1>
      <nav>
        <Link href="/home">Home</Link> |{" "}
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
