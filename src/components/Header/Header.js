import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles["header__one--reverse"]}>
            <p className={styles.text}> I am HEADER</p>
        </header>
    )
}