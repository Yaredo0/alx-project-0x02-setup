import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: ApiPost[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ✅ Static data fetching
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const posts: ApiPost[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}