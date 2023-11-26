import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    tasks: Task[] = []; // Variable pour garder le tableau des tâches
    private idCounter: number = 0; // Variable pour garder le nombre d'id total

    constructor() {
        // Récupérer les tâches depuis le localStorage
        const stringItem: any = localStorage.getItem("TaskArray");
        console.log("Valeur de stringItem : ", stringItem)

        // Parser le tableau des tâcjes et les mettre dans la variable tasks
        this.tasks = JSON.parse(stringItem || '[]') as Task[];

        // Récupérer la valeur du compteur d'id depuis le localStorage
        const stringNumber = localStorage.getItem('idCounter')

        // Vérifier si la valeur est présente
        if (stringNumber) {
            this.idCounter = JSON.parse(stringNumber || "") as number; // Parser le compteur d'id
        }
        
    }

    // Méthode pour récupérer toutes les taches
    getAllTasks(): Task[] {
        return this.tasks; //Renvoie le tableau des tâches
    };

    // Méthode pour récupérer une tache avec son id
    getTaskById(taskId: number): Task {
        // Récupération de l'objet correspondant à l'id en paramètre
        const task = this.tasks.find(task => task.id === taskId); 
        if (!task) { //Si la tâche n'existe pas
           throw new Error('Task not found!');
        } else {
            return task; //Retourne l'objet
        }
    }

    // Méthode pour ajouter une tâche
    addTask(title: string, finished: boolean, tagsString: string): void {
        
        //Création d'un objet
        const newTask = {
            id: this.idCounter,
            title: title,
            finished: finished,
            tags: tagsString.split(', ') // Transformation du string tags en tableau
        };

        this.tasks.push(newTask); // Ajout de l'objet dans le tableau de tache
        this.idCounter++; //Incrémentation du compteur d'id
        localStorage.setItem("idCounter", JSON.stringify(this.idCounter)); // Mise à jour du compteur d'id dans le localStorage

        this.pushLocalStorage(this.tasks); //Mise à jour du tableau de tâches dans le localStorage
    }


    // Méthode pour supprimer une tâche
    deleteTask(elementId: number): void {
        // Récupération de l'index correspondant à l'id en paramètre
        const taskIndex = this.tasks.findIndex(task => task.id === elementId)
        this.tasks.splice(taskIndex, 1); //Suppression de l'objet en fonction de l'index
        this.pushLocalStorage(this.tasks); // Mise à jour du tableau de tâches dans le localStorage

    }

    // Méthode pour mettre à jour le tableau de tâches dans le localStorage
    pushLocalStorage(TaskArray: Task[]): void {
        localStorage.setItem("TaskArray", JSON.stringify(TaskArray));
    }

    // Méthode pour réinitialiser le localStorage
    deleteLocalStorage(): void {
        localStorage.removeItem("TaskArray"); //Supprime le tableau de tâches
        localStorage.removeItem("idCounter"); //Supprime le compteur d'id
        
    }

}