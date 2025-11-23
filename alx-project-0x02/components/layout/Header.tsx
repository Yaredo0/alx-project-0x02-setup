import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Next.js App</h1>
      <nav className="space-x-6">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;