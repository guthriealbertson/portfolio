"use client";
import styles from "@/styles/Layout.module.css";
import Navbar from "./navbar";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  const [color, setColor] = useState(0);

  useEffect(() => {
    console.log(router.pathname);
    switch (router.pathname) {
      case "/":
        setColor("#dfe7fd");
        break;
      case "/contact":
        setColor("#FFF1E6");
        break;
      case "/resume":
        setColor("#E2ECE9");
        break;
      default:
        setColor("#dfe7fd");
    }
  }, [router]);

  return (
    <div>
      <div className={styles.topbar} />
      <div className={styles.bottombar} />

      <div className={styles.background} style={{ backgroundColor: color }}>
        {/* <Navbar /> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
