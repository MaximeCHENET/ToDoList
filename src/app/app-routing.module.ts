import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChangeTaskComponent } from './change-task/change-task.component';


const routes: Routes = [
    { path: 'add', component: AddTaskComponent }, //Route vers la page d'ajout de tâche
    { path: '', component: TaskListComponent }, //Route vers la page d'affichage des tâches
    { path: 'change/:id', component: ChangeTaskComponent } //Route vers la page de modification d'une tâche
];


@NgModule({
    //Importation du module de routage
    imports: [
        RouterModule.forRoot(routes)
    ],
    //Exportation du module de routage pour utilisation externe
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}