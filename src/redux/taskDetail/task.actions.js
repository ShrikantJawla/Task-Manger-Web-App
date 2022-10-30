import axios from "axios";
import { ADDTASK, ADD_SUB_TASK, DELETE_SUB_TASK, GET_ALL_TAGS, UPDATE_ALL_TASKS, UPDATE_STATUS } from "./task.types";


export const addTaskDetails = (payload) => ({ type: ADDTASK, payload })

export const addNewTask = (payload) => async (dispatch) => {
    let res = await axios.post('http://localhost:3000/allAddedTasks', payload, {
        Headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const addSubTask = (payload) => ({ type: ADD_SUB_TASK, payload })

export const deleteSubTask = (payload) => ({ type: DELETE_SUB_TASK, payload })

export const updateAllTasks = () => async (dispatch) => {
    let doneTasks = await axios.get('http://localhost:3000/allAddedTasks?status=done')
    let todo = await axios.get('http://localhost:3000/allAddedTasks?status=todo')
    let progress = await axios.get('http://localhost:3000/allAddedTasks?status=progress')
    let allTasks = await axios.get('http://localhost:3000/allAddedTasks')
    dispatch({
        type: UPDATE_ALL_TASKS, payload: {
            doneTasks: doneTasks.data,
            todo: todo.data,
            progress: progress.data,
            allTasks: allTasks.data,
        }
    })
}

export const getAllTags = () => async (dispatch) => {
    let all = await axios.get('http://localhost:3000/allAddedTasks?tags=all')
    let personal = await axios.get('http://localhost:3000/allAddedTasks?tags=personal')
    let official = await axios.get('http://localhost:3000/allAddedTasks?tags=official')
    let other = await axios.get('http://localhost:3000/allAddedTasks?tags=other')
    dispatch({
        type: GET_ALL_TAGS, payload: {
            all: all.data.length,
            personal: personal.data.length,
            official: official.data.length,
            other: other.data.length
        }
    })
}


export const updateStatus = (id, data) => async (dispatch) => {
    let res = await axios.patch(`http://localhost:3000/allAddedTasks/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
    })
    // dispatch({ type: UPDATE_STATUS, payload: data })
}
