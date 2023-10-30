import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(tittle, description);
    setTittle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Agregar tareas</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTittle(e.target.value)}
          value={tittle}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe tu descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
