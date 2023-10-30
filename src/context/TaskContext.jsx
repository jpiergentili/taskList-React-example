import { useState, useEffect, createContext } from "react";
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function addTask(tittle, description) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        tittle: tittle,
        description: description,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
