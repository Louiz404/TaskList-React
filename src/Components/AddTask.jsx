import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-indigo-600 hover:bg-indigo-700 w-full text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-md shadow-indigo-500/20"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskClick: PropTypes.func.isRequired,
};

export default AddTask;