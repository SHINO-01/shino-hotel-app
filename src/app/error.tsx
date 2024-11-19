"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-page">
      <h1>Something Went Wrong</h1>
      <p>{error.message || "An unexpected error occurred. Please try again."}</p>
      <div>
        <button onClick={reset} className="btn-retry">
          Retry
        </button>
        <Link href="/" className="btn-home">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
