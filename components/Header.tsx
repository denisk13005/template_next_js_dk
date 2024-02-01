"use client";
import { UserButton, useUser } from "@clerk/clerk-react";
import Link from "next/link";

import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const { isLoaded, user } = useUser();
  useEffect(() => {
    console.log(user?.id);
  }, [user]);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navBar}>
        <div>
          <Link href={"/"}>YOUR LOGO HERE</Link>
        </div>
        {isLoaded && user && (
          <div>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/profile">Profile</Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
        {!user && (
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/profile">
              <button>Register / Login</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
