import { useState } from "react"

import './App.css'

import List from "./components/List"
import FormList from "./components/FormList"
import Search from "./components/Search"
import Filter from "./components/Filter"

export default function App() {
  const [all, setAll] = useState([])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

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

  const filteredAndSortedTasks = all
    .filter((task) => filter === "All" ? true : filter === "Completed" ? task.isCompleted : !task.isCompleted)
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="all-list">
        {filteredAndSortedTasks.map((task) => (
          <List key={task.id} task={task} removeAll={removeAll} completedAll={completedAll} />
        ))}
      </div>
      <FormList addAll={addAll} />
    </div>
  )
}
