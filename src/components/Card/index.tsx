import React, { useState } from "react";
import "./styles.css";

type TaskProps = {
  id: number;
  task: string;
};

export const CardMain = () => {
  const [task, setTask] = useState<TaskProps>({ id: 0, task: "" });
  const [list, setList] = useState<TaskProps[]>([]);
  const [counter, setCounter] = useState<number>(1); // contador para o id do task

  // inserir o valor do input no estado
  const handleSetTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({ ...prevTask, task: e.target.value }));
  };

  const handleSubmit = () => {
    if (task?.task.trim() !== "") {
      setList([...list, task]);
      setTask({ id: counter, task: "" });
      setCounter(counter + 1); // acrescenta 1 ao counter para um id unique
    }
  };

  // filtrar a lista e retornar todos os itens que não tem o id igual ao id que foi passado
  const handleDeleteTask = (taskID: number) => {
    const updatedList = list.filter((taskItem) => taskItem.id !== taskID);
    setList(updatedList);
  };

  // quando o usuário apertar enter, o handleSubmit é chamado
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <main className="card-main">
      <div className="pesquisa">
        <input
          value={task?.task}
          onChange={handleSetTask}
          onKeyDown={handleKeyPress}
          className="pesquisa-input"
          placeholder="Adicionar tarefa"
        />
        <button onClick={handleSubmit}>🚀</button>
      </div>

      <div className="listas-exibidas">
        <ul>
          {list.map((taskItem, index) => (
            <li className="li-lista" key={index}>
              {taskItem.task}

              <button
                className="button-lista"
                onClick={() => handleDeleteTask(taskItem.id)}
              >
                ✔
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
