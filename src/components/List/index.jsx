import styles from './styles.module.css'

export default function List({ task, removeAll, completedAll }) {
  return (
    <div className={`task ${task.isCompleted ? styles.completed : ''}`}>
      <div className="content">
        <p>{task.text}</p>
        <p className="category">({task.category})</p>
      </div>
      <div>
        <button className={styles.complete} onClick={() => completedAll(task.id)}>Completar</button>
        <button className={styles.remove} onClick={() => removeAll(task.id)}>x</button>
      </div>
    </div>
  )
}
