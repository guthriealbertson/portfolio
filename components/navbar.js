import styles from "@/styles/Layout.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <Link className={styles.logo} href="/">
        G
      </Link>
      <div className={styles.link}>
        <Link  href="/about">
          About
        </Link>
        <Link  href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
