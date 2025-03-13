type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div className="p-6 bg-black-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white-800 mb-6">
        Users
      </h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-gray-300 shadow-md rounded-lg border border-gray-200"
          >
            <p className="text-lg font-semibold text-gray-900">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
