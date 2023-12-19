"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base">
        <button type="button">Create Your Pizza</button>
      </Link>
    </div>
  );
}
