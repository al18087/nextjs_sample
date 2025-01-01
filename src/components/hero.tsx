import styles from "@/styles/hero.module.css"

interface TitleProp {
    title: string;
    subtitle: string;
}

interface HeroProps {
    prop: TitleProp;
    imageOn?: boolean; // imageOnをオプショナルにする
}

export default function Hero({ prop, imageOn = false }: HeroProps) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{prop.title}</h1>
                <p className={styles.subtitle}>{prop.subtitle}</p>
            </div>
            {imageOn && <figure> [画像] </figure>}
        </div>
    )
}