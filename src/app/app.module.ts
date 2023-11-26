import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ChangeTaskComponent } from './change-task/change-task.component';
import { FilterTagsPipe } from './task-list/tag-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    HeaderComponent,
    AddTaskComponent,
    ChangeTaskComponent,
    FilterTagsPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
