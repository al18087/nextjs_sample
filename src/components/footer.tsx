import Container from "./container";
import Logo from "./logo";
import styles from "@/styles/footer.module.css";
import Social from "./social";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo></Logo>
                    <Social></Social>
                </div>
            </Container>
        </footer>
    )
}