import { useRouter } from 'next/router';

function SinglePost() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h2>SinglePost Page</h2>
    </div>
  );
}
export default SinglePost;
