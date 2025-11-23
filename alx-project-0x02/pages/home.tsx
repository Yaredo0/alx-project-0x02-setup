import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Introduction", content: "Reusable Card component built with TypeScript and Tailwind CSS." },
    { title: "Next.js Setup", content: "We scaffolded the project with Next.js, TypeScript, and Tailwind CSS." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add New Post
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
}