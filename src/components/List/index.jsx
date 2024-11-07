import React from "react";

export default function List({task}){
    return(
        <div className="task">
            <div className="content">
              <p>{task.text}</p>
              <p className="category"> ({task.category})</p>
            </div>
            <div>
              <button className="complete">Completar</button>
              <button className="remove">x</button>
            </div>
        </div>
    )
}

