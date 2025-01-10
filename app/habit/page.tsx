import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Dashboard Habits</h1>

      <ul>
        <li>
          <Link href="/habit/1"></Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
