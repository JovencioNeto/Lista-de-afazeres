import { useState } from "react"

import './App.css'

import List from "./components/List"
import FormList from "./components/FormList"
import Search from "./components/Search"

export default function App() {
  const [all, setAll] = useState([
    
  ])

  const [search, setSearch] = useState("")

  const addAll = (text, category) => {
    const newAll = [
      ...all,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]
    setAll(newAll)
  }

  const removeAll = (id) => {
    const filteredAll = all.filter((task) => task.id !== id)
    setAll(filteredAll)
  }

  const completedAll = (id) => {
    const updatedAll = all.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setAll(updatedAll)
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="all-list">
        {all
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
            <List key={task.id} task={task} removeAll={removeAll} completedAll={completedAll} />
          ))}
      </div>
      <FormList addAll={addAll} />
    </div>
  )
}
