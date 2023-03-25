import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../task/Task';
import style from "./list.module.css"


const ListTask = ({ status }) => {
    const listTaskReducer = useSelector((state) => state.task.listTasks)
    // console.log(listTaskReducer);


    return (
        <div className={style.cadre} >

            {status === "done" ? listTaskReducer.filter((el) => el.isDone === true)
                .map((el) => <Task task={el} key={el.id} />)
                : status === "undone" ? listTaskReducer.filter((el) => el.isDone === false)
                    .map((el) => <Task task={el} key={el.id} />)

                    : listTaskReducer.map((el) => <Task task={el} key={el.id} />)
            }

        </div>
    )
}

export default ListTask