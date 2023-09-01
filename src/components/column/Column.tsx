import styles from "./styles.module.css"

export default function Column({title}: {title: string}) {
    return (
    <div className={styles.column}>
        {title}
    </div>
    )
}