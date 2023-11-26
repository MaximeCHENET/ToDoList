import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})


export class AddTaskComponent {
  constructor(private taskService: TaskService, private router: Router) { }

  tasks: Task[] = this.taskService.getAllTasks(); // Récupération du tableau des tâches

  // Initialisation des variables
  id!: string;
  title!: string;
  finished: boolean = false;
  tags!: string;

  // Lorsque l'utilisateur clique sur le bouton "Ajouter"
  onSubmit(): void {
    if (this.title && this.tags !== 'undefined') { //Sécurité pour éviter un titre et des tags vides
      //Appel de la méthode pour ajouter une tâche
      this.taskService.addTask(this.title, this.finished, this.tags);

      //Réinitialisation des variables
      this.id = '';
      this.title = '';
      this.finished = false;
      this.tags = ''; 

      //Emmener vers la page d'accueil
      this.router.navigateByUrl('');
    } 

  }
}
