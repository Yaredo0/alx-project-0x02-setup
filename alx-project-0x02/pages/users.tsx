import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

interface UsersPageProps {
  users: ApiUser[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ✅ Static data fetching
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: ApiUser[] = await res.json();

  return {
    props: {
      users,
    },
  };
}