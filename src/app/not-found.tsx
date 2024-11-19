import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="btn-home">
        Go Back Home
      </Link>
    </div>
  );
}
