import Link from 'next/link';

function UserPage() {
  const users = [
    { id: 1, username: 'Saeed' },
    { id: 2, username: 'Hamid' },
    { id: 3, username: 'Pasha' },
    { id: 4, username: 'Reza' },
    { id: 5, username: 'admin' },
  ];

  return (
    <div>
      <h2>User Page</h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: '/users/[id]',
                query: { id: item.id, username: item.username },
              }}
            >
              {item.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserPage;
