import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/blog/posts">Blog</Link>
    </div>
  );
}
export default HomePage;
