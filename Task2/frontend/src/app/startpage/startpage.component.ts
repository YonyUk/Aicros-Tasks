import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {

  constructor(private router: Router) { }

  readonly Title = 'ActiveManager';

  showActives(): void {
    this.router.navigate(['/actives']);
  }

  showAreas(): void {
    this.router.navigate(['areas']);
  }

}
