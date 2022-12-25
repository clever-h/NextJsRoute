import { useRouter } from 'next/router';

function UserIdPost() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h2>UserIdPost</h2>
    </div>
  );
}
export default UserIdPost;