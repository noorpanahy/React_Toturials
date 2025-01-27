import React, {useState} from "react"

function ToDoList(){
    const [Tasks, SetTasks] = useState([]);
    const [NewTask, SetNewTask] = useState("");

    function HandleInputChange (event){
        SetNewTask(event.target.value)
    }
    function AddTask(){

        if(NewTask.trim() !== ""){
        SetTasks(t => [ ...t , NewTask ]);
        SetNewTask("");
        }
    }
    function DeleteTask(index){
        const delet = Tasks.filter((_, i) => i !==index );
        SetTasks(delet);
    }
    function MoveUp(index){
        if(index > 0){
            const update = [...Tasks];
            [update[index], update[index - 1]] = 
            [update[index - 1], update[index]];
            SetTasks(update);
        }
    }
    function MoveDown(index){
        if(index < Tasks.length - 1){
            const update = [...Tasks];
            [update[index], update[index + 1]] = 
            [update[index + 1], update[index]];
            SetTasks(update);
        }
    }

    return(
        <div className="To-do-list">
            <h1 className="hh1">To Do List</h1>

            <div>
                <input type="text" className="task-input" placeholder="Add Task To Do" value={NewTask} onChange={HandleInputChange} />
                <button className="Add-Button" onClick={AddTask}>
                ADD
                </button>
            </div>

            <ol className="ol-class">
                {Tasks.map((Task, index) => 
                            <li key={index} className="li-class">
                                <span className="text-tasks">{Task}</span>
                                <button className="delete-button" onClick={() => DeleteTask(index)}>
                                    Delete
                                </button>
                                <button className="Move-button" onClick={() => MoveUp(index)}>
                                    👆
                                </button>
                                <button className="Move-button" onClick={() => MoveDown(index)}>
                                    👇
                                </button>
                            </li>
                            ) }
            </ol>

        </div>
    );

}
export default ToDoList