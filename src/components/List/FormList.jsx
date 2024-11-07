import React from "react";

export default function FormList(){
    return(
    <div className="form-list">
        <h2>Criar tarefa:</h2>
        <form action="">
            <input type="text" placeholder="Digite o título" />
            <select name="" id="">
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Lazer">Lazer</option>
                <option value="Familia">Família</option>
                <option value="Amigos">Amigos</option>
            </select>
            <button type="submit">Criar uma Tarefa</button>
        </form>
    </div>
    )
}