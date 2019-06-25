import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { TodoInputComponent } from './todos/todo-input/todo-input.component';
import { TodoListItemComponent } from './todos/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

const routes = [
  { path: '', component: TodosComponent },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ TodosComponent, TodoInputComponent, TodoListItemComponent, TodoListComponent ]
})
export class TodosModule { }
