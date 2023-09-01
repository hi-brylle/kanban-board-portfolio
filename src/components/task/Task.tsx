import styles from "./styles.module.css"

export default function Task({id, title, description}: {id: number, title: string, description: string}) {
    return (
    <div className={styles.task}>
        <div className={styles.detail}>
            {title}
        </div>
        <div className={styles.detail}>
            {description}
        </div>
        <div className={styles.detail}>
            id: {id}
        </div>
    </div>
    )
}