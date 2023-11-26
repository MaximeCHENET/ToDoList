import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { FilterTagsPipe } from './tag-filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],

  providers: [FilterTagsPipe]
})
export class TaskListComponent {

  //Variable contenant le tableau des tâches
  tasks!: Task[];
  //Variable contenant la recherche utilisateur
  rechercheTags: string = '';
  //Variable contenant le tableau des taches filtrées
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router, private filterTagsPipe: FilterTagsPipe) { }

  ngOnInit() {
    //Récupération des tâches
    this.tasks = this.taskService.getAllTasks();
    
    this.filteredTasks = this.tasks
    
  }

  //Méthode de mise à jour du filtre
  updateFilteredTasks(): void {
    //Appel de la méthode de filtrage des tâches
    this.filteredTasks = this.filterTagsPipe.transform(this.tasks, this.rechercheTags)
  }

  // Méthode pour supprimer les tâches
  onDeleteAllTasks(): void {
    //Appel de la méthode de suppression du LocalStorage
    this.taskService.deleteLocalStorage();

    //Rafraichissement de la page pour actualiser l'affichage
    location.reload();
  }
  

}
