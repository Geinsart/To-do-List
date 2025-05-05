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
 return (
  <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
    <div className= "w-[500px]">
    <h1 className= "text-3xl text-slate-100 font-bold text-center" >Gerenciador de Tarefas</h1>
    <AddTask />
    <Tasks tasks={tasks}/>

    </div>
  </div>
 )
};

export default App;
