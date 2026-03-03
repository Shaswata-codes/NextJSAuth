"use client";

import { useParams } from "next/navigation";

export default function ProfilePage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <h1 className="text-4xl">Profile page</h1>
      <span className="text-2xl rounded bg-orange-500 text-black ml-2">{id}</span>
    </div>
  );
}