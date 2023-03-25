import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "../content/contentType"

export const addtask = (newTask) => {
    return {
        type: ADDTASK,
        payload: newTask
    }
}

export const edittask = (id, newTask) => {
    return {
        type: EDITTASK,
        payload: { id, newTask }
    }
}
export const deleletask = (id) => {
    return {
        type: DELETETASK,
        payload: id
    }
}
export const donetask = (id) => {
    return {
        type: DONETASK,
        payload: id
    }
}