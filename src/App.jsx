import { useState } from "react";

import './App.css'

import List from "./components/List";
import FormList from "./components/List/FormList";

export default function App(){
  const [all, setAll] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);

  const addAll = (text, category) => {
    const newAll = [
      ...all,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setAll(newAll);
  };

  const removeAll = (id) => {
    const filteredAll = all.filter((task) => task.id !== id);
    setAll(filteredAll);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="all-list">
        {all.map((task) => (
          <List key={task.id} task={task} removeAll={removeAll} />
        ))}
      </div>
      <FormList addAll={addAll} />
    </div>
  );
}
