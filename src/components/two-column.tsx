import React from "react";
import styles from "@/styles/two-column.module.css";

type TwoColumnProps = {
    children: React.ReactNode;
}

type TwoColumnMainProps = {
    children: React.ReactNode;
}

type TwoColumnSidebarProps = {
    children: React.ReactNode;
}

export function TwoColumn(props: TwoColumnProps) {
    return (
        <div className={styles.flexContainer}>
            {props.children}
        </div>
    )
}

export function TwoColumnMain(props: TwoColumnMainProps) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export function TwoColumnSidebar(props: TwoColumnSidebarProps) {
    return (
        <div className={styles.sidebar}>
            {props.children}
        </div>
    )
}