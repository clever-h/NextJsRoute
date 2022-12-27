import { useRouter } from 'next/router';

function UserId() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  function showUserIdHandler() {
    // router.push('/users/admin');
    router.push({
      pathname: '/users/[id]',
      query: { id: 'admin' },
    });
  }

  return (
    <div>
      <h2>USER ID</h2>
      <button onClick={showUserIdHandler}>Show User ID</button>
    </div>
  );
}
export default UserId;
