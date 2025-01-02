import styles from "@/styles/hero.module.css";
import cube from "@/images/cube.jpg";
import Image from "next/image";

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
            {imageOn && (
                <figure className={styles.image}>
                    <Image src={cube} alt="" layout="responsive"
                        sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
                        priority placeholder="blur"></Image>
                </figure>
            )}
        </div>
    )
}