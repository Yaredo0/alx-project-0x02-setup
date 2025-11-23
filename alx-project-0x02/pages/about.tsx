// pages/about.tsx
import Button from "@/components/common/Button";
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This page shows basic routing in Next.js.</p>
          <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p className="mb-6 text-gray-600">
        This page demonstrates the reusable Button component with different sizes and shapes.
      </p>

      <div className="flex space-x-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>

    </div>
  );
}