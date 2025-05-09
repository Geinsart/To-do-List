import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {

return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.tasks.map((tasks) => 
                        <li key={tasks.id} className= "flex gap-2"> 
                                <button 
                                onClick={() => props.onTaskClick(tasks.id)}
                                className= {`bg-slate-400 text-white w-full p-2 rounded-md text-left ${tasks.isCompleted && "line-through"}`}>
                                        {tasks.title}
                                </button>
                                <button 
                                className= "bg-slate-400 text-white p-2 rounded-md">
                                        <ChevronRightIcon/>
                                </button>
                                <button 
                                onClick={() => props.onDeleteTaskClick(tasks.id)}
                                className= "bg-slate-400 text-white p-2 rounded-md">
                                        <TrashIcon/>
                                </button>
                        </li>)}
        </ul>
)
}

 export default Tasks;