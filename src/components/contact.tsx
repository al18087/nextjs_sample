import styles from "@/styles/contact.module.css";
import Social from "./social";

export default function Contact() {
    return (
        <div>
            <h3 className={styles.stack}>Contact</h3>
            <Social iconSize="30px"></Social>
            <address className={styles.heading}>cube@web.mail.address</address>
        </div>
    )
}