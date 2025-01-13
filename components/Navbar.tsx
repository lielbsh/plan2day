import React from "react";
import Link from "next/link";
import { auth, signOut, signIn } from "../auth";
import SignIn from "./sign-in";
import Image from "next/image";

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

            <div>{session?.user.name}</div>
            {/* Check if the user has an image */}
            {session.user?.image ? (
              <Image
                src="https://avatars.githubusercontent.com/u/171127259?" // User's image URL
                alt="User Profile Image"
                width={50} // Adjust based on your design
                height={50} // Adjust based on your design
                className="rounded-full" // Optional, for rounded images
              />
            ) : (
              // <div>{session.user.image}</div>
              <Image
                src="data:image/png;base64,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" // Fallback image if no user image is available
                alt="Default Profile Image"
                width={50} // Adjust based on your design
                height={50} // Adjust based on your design
                className="rounded-full" // Optional, for rounded images
              />
            )}

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
          <SignIn />
        )}
      </div>
    </nav>
  );
};
