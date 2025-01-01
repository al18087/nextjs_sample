import React from "react"
import styles from "@/styles/container.module.css";

type Props = {
    children: React.ReactNode;
    large?: boolean;
}

export default function Container(props: Props) {
    return (
        <div className={props.large ? styles.large : styles.default}>
            {props.children}
        </div>
    )
}