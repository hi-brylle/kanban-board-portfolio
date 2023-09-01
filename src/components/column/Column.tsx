import { ITask } from "@/models/task"
import styles from "./styles.module.css"
import Task from "../task/Task"

export default function Column({title, tasks}: {title: string, tasks: Array<ITask>}) {
    const taskList = tasks.map((task) => {
        return <li><Task id={task.id} title={task.title} description={task.description}/></li>
    })

    return (
    <div className={styles.column}>
        {title}
        <ul>{taskList}</ul>
    </div>
    )
}