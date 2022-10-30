import { ADDTASK, ADD_SUB_TASK, DELETE_SUB_TASK, GET_ALL_TAGS, UPDATE_ALL_TASKS, UPDATE_STATUS } from "./task.types"

const initialState = {
    newTask: {
        subTasks: []
    },
    pendingTasks: [],
    allAddedTasks: [],
    todo: [],
    completedTasks: [],
    tagsCounts: {
        all: 0,
        personal: 0,
        official: 0,
        others: 0
    }
}

export const tasksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDTASK:
            return {
                ...state,
                newTask: { ...payload }
            }
        case ADD_SUB_TASK: {
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    subTasks: [...state.newTask.subTasks, payload]
                }
            }
        }
        case DELETE_SUB_TASK: {
            let updatedNewTask = state.newTask.subTasks.filter(item => item.id !== payload);
            return {
                ...state,
                newTask: {
                    ...state.newTask,
                    subTasks: updatedNewTask,
                }
            }
        }
        case UPDATE_ALL_TASKS:
            return {
                ...state,
                todo: payload.todo,
                completedTasks: payload.doneTasks,
                pendingTasks: payload.progress,
                allAddedTasks: payload.allTasks,
            }
        case GET_ALL_TAGS:
            return {
                ...state,
                tagsCounts: {
                    all: payload.all,
                    personal: payload.personal,
                    official: payload.official,
                    others: payload.other,
                }
            }
        default:
            return state
    }
}