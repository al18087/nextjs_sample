import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/social.module.css";
import React from "react";

interface Props {
    iconSize?: string
}

export default function Social({ iconSize = 'initial' }: Props) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize } as React.CSSProperties}>
            <li>
                <a href="https://x.com">
                    <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
                    <span className="sr-only">X</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    <span className="sr-only">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <span className="sr-only">GitHub</span>
                </a>
            </li>
        </ul>
    )
}