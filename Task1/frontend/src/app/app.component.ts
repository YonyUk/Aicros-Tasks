import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TASKS, SAVE_TASK, DELETE_TASK, UPDATE_TASK } from './types';
import { TaskItemModel, TaskModel } from './taskitem/taskitem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'NoteBook';

  taskList: TaskItemModel[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadDataBase()
  }

  async loadDataBase() {
    this.apollo.watchQuery({
      query: GET_TASKS
    }).valueChanges.subscribe(({ data }) => {
      for (let i = 0; i < (data as any).tasks.length; i++) {
        const new_task: TaskItemModel = {
          TaskID: (data as any).tasks[i].TaskID,
          TaskName: (data as any).tasks[i].TaskName,
          TaskDescription: (data as any).tasks[i].TaskDescription,
          TaskChecked: false,
          TaskCreated: true,
          TaskSaved: true
        };
        this.taskList.push(new_task);
      }
    });
  }

  cancelTask(id: number) {
    this.taskList = this.taskList.filter(element => {
      return element.TaskID !== id;
    });
  }

  async updateTask(task: TaskModel) {
    this.apollo.mutate({
      mutation: UPDATE_TASK,
      variables: {
        input: task
      }
    }).subscribe(res => console.log(res));
  }

  async storeTask(task: TaskModel) {
    this.apollo.mutate({
      mutation: SAVE_TASK,
      variables: {
        input: task
      }
    }).subscribe(res => console.log(res));
  }

  async deleteTask(task: TaskModel) {
    this.apollo.mutate({
      mutation: DELETE_TASK,
      variables: {
        input: task.TaskID
      }
    });
    this.taskList = this.taskList.filter(element => {
      return element.TaskID !== task.TaskID;
    });

    console.log(this.taskList);
  }

  async createTaskModel() {

    const taskModel: TaskItemModel = {
      TaskID: this.taskList[this.taskList.length - 1].TaskID + 1,
      TaskName: "",
      TaskDescription: "",
      TaskChecked: false,
      TaskCreated: false,
      TaskSaved: false
    };
    this.taskList.push(taskModel);
  }
}
