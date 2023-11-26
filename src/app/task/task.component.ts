import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService, private router: Router) { }

  //Récupération de toutes les tâches
  tasks: Task[] = this.taskService.getAllTasks();

  //Lorsque l'utilisateur clique sur le bouton de modification d'une tâche
  onChangeTask(elementId: number): void {
    this.router.navigateByUrl(`change/${elementId}`);
  }

  //Lorsque l'utilisateur clique sur le bouton de suppression d'une tâche
  onDeleteTask(elementId: number): void {
    //Appel de la méthode de suppression d'une tâche
    this.taskService.deleteTask(elementId);

    //Ramener vers l'accueil
    this.router.navigateByUrl('');
  }
}
