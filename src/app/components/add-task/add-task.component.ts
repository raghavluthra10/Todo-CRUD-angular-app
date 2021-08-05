import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // @Output() onAddTask: EventEmitter<Task> = new  EventEmitter();
  @Output() onAddTask = new  EventEmitter();

  // Getting input values from Form
  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    if(!this.text) {
      alert('Please add a task');
      return;
    };

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit event
    this.onAddTask.emit(newTask); // Ask how to make it work in strict form

    // clear the form after submit
    this.text='';
    this.day='';
    this.reminder=false;
  };
}
