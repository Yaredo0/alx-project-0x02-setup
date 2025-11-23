import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p className="text-gray-600">This page will display posts fetched from an API in later tasks.</p>
      </div>
    </div>
  );
}