import { useState } from "react"
import styles from './styles.module.css'

export default function FormList({ addAll }) {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value && category) { 
      addAll(value, category)
      setCategory("")
      setValue("")
    }
  }

  return (
    <div className="form-list">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select
          value={category}
          name="option-area"
          id="option-area"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Lazer">Lazer</option>
          <option value="Familia">Família</option>
          <option value="Amigos">Amigos</option>
        </select>
        <button type="submit" className={styles.taskButton}>Criar uma Tarefa</button>
      </form>
    </div>
  )
}
