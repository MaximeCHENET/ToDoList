import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-change-task',
  templateUrl: './change-task.component.html',
  styleUrls: ['./change-task.component.scss']
})
export class ChangeTaskComponent {
  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute) { }

  @Input() uneTask!: Task;

  //Récupération de toutes les tâches
  tasks: Task[] = this.taskService.getAllTasks();
  
  index!: number;

  id!: number;
  title!: string;
  finished!: boolean;
  tagsString!: string;

  ngOnInit(): void {
    //Récupération de l'id dans l'url
    const taskId = +this.route.snapshot.params['id'];

    //Récupération de la tâche correspondate à l'id
    this.uneTask = this.taskService.getTaskById(taskId);

    //Recherche de l'index de la tâche dans le tableau des tâches
    this.index = this.tasks.findIndex(obj => obj.id === taskId);

    // Initialisation des variables
    this.id = taskId;
    this.title = this.uneTask.title;
    this.finished = this.uneTask.finished;
    this.tagsString = this.uneTask.tags.join(", "); //Transformation du tableau de tags en chaîne de caractère
  }

  

  onSubmit(): void {
    // Création d'un objet avec les données des champs
    const changedTask = {
      id: this.id,
      title: this.title,
      finished: this.finished,
      tags: this.tagsString.split(", ") //Transformation du string tags en tableau
    }

    //Modification de la tâche dans le tableau à partir de son index
    this.tasks[this.index] = changedTask; 

    //Appel de la méthode pour mettre à jour le localStorage
    this.taskService.pushLocalStorage(this.tasks);

    //Réinitialisation des variables
    this.id = 0;
    this.title = '';
    this.finished = false;
    this.tagsString = ""

    //Emmener vers la page d'accueil
    this.router.navigateByUrl('');
  }

  
}
