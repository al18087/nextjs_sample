import React from "react";
import styles from "@/styles/post-body.module.css";

type Props = {
    children: React.ReactNode
}

export default function PostBody(props: Props) {
    return (
        <div className={styles.stack}>
            {props.children}
        </div>
    )
}