import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styles from "@/styles/accordion.module.css";

type Props = {
    heading: string;
    children: React.ReactNode;
}

export default function Accordion(props: Props) {
    const [textIsOpen, setTextIsOpen] = useState(false);
    const toggleText = () => {
        setTextIsOpen((prev) => !prev);
    }

    const refText = useRef<HTMLDivElement | null>(null);

    return (
        <div className={textIsOpen ? styles.open : styles.close}>
            <h3 className={styles.heading}>
                <button onClick={toggleText}>
                    {props.heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon}></FontAwesomeIcon>
                </button>
            </h3>
            <div className={styles.text} ref={refText} style={{ '--text-height': refText.current ? `${refText.current.scrollHeight}px` : '0px' } as React.CSSProperties}>
                <div className={styles.textInner}>{props.children}</div>
            </div>
        </div>
    )
}