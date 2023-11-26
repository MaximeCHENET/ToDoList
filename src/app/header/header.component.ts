import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  //Lorsque l'utilisateur clique sur le bouton d'ajout d'une tâche
  onAddPage(): void {
    //Emmener vers la page d'ajout
    this.router.navigateByUrl('add');
  }
}
