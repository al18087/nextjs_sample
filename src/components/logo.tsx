import Link from "next/link";
import styles from "@/styles/logo.module.css";

type LogoProps = {
    boxOn?: boolean
}

export default function Logo(props: LogoProps) {
    return (
        <Link href={"/"}>
            <a className={props.boxOn ? styles.box : styles.basic}>CUBE</a>
        </Link>
    )
}