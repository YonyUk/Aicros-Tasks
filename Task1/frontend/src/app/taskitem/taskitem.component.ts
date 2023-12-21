import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.scss']
})
export class TaskitemComponent implements OnInit {

  private created: boolean = false;

  @Input()
  TaskID!: number;

  @Input()
  TaskName!: string;

  @Input()
  TaskDescription!: string;

  @Input()
  TaskChecked!: boolean;

  @Input()
  TaskCreated!: boolean;

  @Input()
  TaskSaved!: boolean;

  @Output()
  TaskEventListenerCreator = new EventEmitter<TaskModel>();
  
  @Output()
  TaskEventListenerDeleter = new EventEmitter<TaskModel>();

  @Output()
  TaskEventListenerCanceler = new EventEmitter<number>();

  @Output()
  TaskEventListenerUpdater = new EventEmitter<TaskModel>();

  private OnEditing: boolean = false;

  private Task!: TaskModel;

  ngOnInit() {
    if (this.TaskCreated)
      this.Task = {
        TaskID: this.TaskID,
        TaskName: this.TaskName,
        TaskDescription: this.TaskDescription
      };
  }

  createTask(): void {
    this.TaskCreated = true;
    this.Task = {
      TaskID: this.TaskID,
      TaskName: this.TaskName,
      TaskDescription: this.TaskDescription
    };
    if (this.OnEditing)
      this.TaskEventListenerUpdater.emit(this.Task);
  }

  saveTask(): void {
    this.TaskSaved = true;
    this.TaskEventListenerCreator.emit(this.Task);
  }

  markTaskChecked(): void {
    this.TaskEventListenerDeleter.emit(this.Task);
  }

  editTask(): void {
    this.TaskCreated = false;
    this.TaskSaved = false;
    this.OnEditing = true;
  }

  cancelTask(): void {
    if (this.OnEditing)
    {
      this.TaskCreated = true;
      this.TaskSaved = true;
      this.OnEditing = false;
    }
    else
      this.TaskEventListenerCanceler.emit(this.TaskID);
  }

}

export interface TaskItemModel {
  TaskID: number;
  TaskName: string;
  TaskDescription: string;
  TaskChecked: boolean;
  TaskCreated: boolean;
  TaskSaved: boolean
}

export interface TaskModel {
  TaskID: number;
  TaskName: string;
  TaskDescription: string;
}