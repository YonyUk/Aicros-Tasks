import { gql } from 'apollo-angular';

export interface Task {
    TaskID: number,
    TaskName: string,
    TaskDescription: string
}

export interface TasksResponse{
    allTasks: {
        Tasks: Task[]
    }
}

export const GET_TASKS = gql`
    query Get_All_Tasks{
        tasks{
            TaskID
            TaskName
            TaskDescription
        }
    }
`

export const SAVE_TASK = gql`
    mutation Save_Task($input: CreateTaskInput!){
        createTask(createTaskInput: $input) {
            TaskID
            TaskName
            TaskDescription
        }
    }
`

export const DELETE_TASK = gql`
    mutation Delete_Task($input: Int!){
        removeTask(id: $input) {
            TaskID
            TaskName
            TaskDescription
        }
    }
`

export const UPDATE_TASK = gql`
    mutation Update_Task($input: UpdateTaskInput!){
        updateTask(updateTaskInput: $input) {
            TaskID
            TaskName
            TaskDescription
        }
    }
`