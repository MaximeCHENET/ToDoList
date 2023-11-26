import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'filterTags'
})
export class FilterTagsPipe implements PipeTransform {

  //Prise en compte des paramètres (Tableau des tâches, recherche utilisateur)
  transform(tasks: Task[], filterTags: string): Task[] {

    //Si l'utilisateur n'a pas filtré, renvoyer toutes les tâches
    if (!filterTags) {
      return tasks;
    }


    var tmp: Task[] = []; //Création d'un tableau temporaire

      tasks.filter(task => {
        const tagArray: string[] = filterTags.toLowerCase().split(", ") // Convertit la chaîne de tags en un tableau de tags individuels

        for (const tag of tagArray) {
          // Si le tag correspond à l'un des tags d'une tâche...
          if (task.tags.some(taskTag => taskTag.toLowerCase().startsWith(tag.toLowerCase()))) {
            tmp.push(task); // Ajoute la tâche au tableau temporaire
            break; //Arrêt de la boucle pour passer à la tâche suivante
          }
        }

      })

    return tmp
    
  }
}