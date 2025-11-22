import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '../components/layout/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Welcome to Next.js Project Setup!</h2>
        <p className="mt-2 text-gray-600">
          This is the starting point of your Next.js + TypeScript + Tailwind CSS application.
        </p>
      </main>
    </div>
  );
}
