

import { useDispatch } from "react-redux";
import Edit from "../edit/Edit";
import { deleletask, donetask } from "../redux/action/action";
import "./task.css"

const Task = ({ task }) => {
    const dispatch = useDispatch()
    const handelDelete = () => {
        dispatch(deleletask(task.id))
    }

    const handelDone = () => {
        dispatch(donetask(task.id))
    }



    return (
        <div className="bloc" >

            <h2 className={task.isDone ? "done titre" : "titre"}>{task.text}</h2>


            <i className="fa-solid fa-trash" onClick={handelDelete}></i>
            <Edit task={task} />

            <button onClick={handelDone} className="btn1" >{task.isDone ? "unDone" : "Done"}</button>


        </div>
    )
}

export default Task