import { useState } from "react";
import AddTask from "./compontes/AddTasks";
import Tasks from "./compontes/tasks";
import './index.css';



function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Node",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Estudar React Native",
      isCompleted: false,
    },
  ]);

function onTaskClick(taskId) {
  const newTasks = tasks.map(task => {
    //atualizar essa tarefa
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }
    //não atualizar essa tarefa
  
      return task;

    
  } );

  setTasks(newTasks);
  
}

function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasks(newTasks);
    };



 return (
  <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
    <div className= "w-[500px]">
    <h1 className= "text-3xl text-slate-100 font-bold text-center" >Gerenciador de Tarefas</h1>
    <AddTask />
    <Tasks tasks={tasks} onTaskClick = {onTaskClick}  onDeleteTaskClick = {onDeleteTaskClick}  />

    </div>
  </div>
 )
};

export default App;
