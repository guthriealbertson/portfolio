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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      switch (url) {
        case "/":
          setColor("#dfe7fd");
          break;
        case "/contact":
          setColor("#E2ECE9");
          break;
        case "/about":
          setColor("#FDE2E4");
          break;
        default:
          setColor("#dfe7fd");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div>
      <div className={styles.background} style={{ backgroundColor: color }}>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
