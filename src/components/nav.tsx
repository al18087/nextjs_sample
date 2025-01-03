import Link from "next/link";
import styles from "@/styles/nav.module.css";
import { useState } from "react";

export default function Nav() {
    const [navIsOpen, setNaviIsOpen] = useState(false);

    const toggleNav = () => {
        setNaviIsOpen((prev) => !prev);
    }

    const closeNav = () => {
        setNaviIsOpen(false);
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                    @media (max-width: 767px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            width: 100%;
                        }
                    }
                `}</style>
            )}
            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href={"/"}>
                        <a onClick={closeNav}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/about"}>
                        <a onClick={closeNav}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"}>
                        <a onClick={closeNav}>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}