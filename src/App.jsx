import "./App.css";
import Tasks from "./Components/Tasks.jsx";
import AddTask from "./Components/AddTask.jsx";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
  //       method: "GET",
  //     });
  //     const data = await response.json();
      
  //     setTasks(data); 
  //   }
    
  //   // Pode chamar a API para adicionar tarefas iniciais

   // fetchTasks(); 
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-900 flex justify-center p-6 font-sans">
      <div className="w-[500px] space-y-6">
        <h1 className="text-4xl text-white font-bold text-center py-4">
          Gerenciador de Tarefas
        </h1>
        
        <AddTask onAddTaskClick={onAddTaskClick} />
        
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick} 
        />
      </div>
    </div>
  );
}

export default App;