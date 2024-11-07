import { useState } from "react";

import './App.css'
import List from "./components/List";
import FormList from "./components/List/FormList";

export default function App(){
  const[all, setAll] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2 ,
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

  ])

  return(
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="all-list">
        {all.map((all)=>(
          <List task={all}/>
        ))}
      </div>
      <FormList/>
    </div>
  )
}
