"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  useEffect(() => {
    user && router.push("/");
  }, [router, user]);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navBar}>
        <div>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
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
              <button className={styles.loginBtn}>Register / Logins</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
