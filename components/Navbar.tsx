import React from "react";
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";

export const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-purple-200 p-4 shadow-md font-serif">
      <div className="container mx-auto flex justify-between items-center">
        {session && session?.user ? (
          <>
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-dosis font-bold text-white hover:text-pink-600">
                Home
              </span>
            </Link>

            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit" className="text-white hover:text-pink-600">
                Sign Out
              </button>
            </form>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit" className="flex items-center">
              <span className="text-3xl font-dosis font-bold text-white hover:text-pink-600">
                Sign In
              </span>
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};
