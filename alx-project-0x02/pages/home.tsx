
import Card from "@/components/common/Card";
// pages/home.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the basic routing demo for Next.js.</p>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Introduction" content="This is a reusable Card component built with TypeScript and Tailwind CSS." />
      <Card title="Next.js Setup" content="We scaffolded the project with Next.js, TypeScript, and Tailwind CSS." />
      <Card title="Reusable Components" content="Cards, buttons, and modals will be created to demonstrate modular design." />
    </div>
    </div>
  )
  ;
}