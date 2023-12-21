import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-areastorerpresentation',
  templateUrl: './areastorerpresentation.component.html',
  styleUrls: ['./areastorerpresentation.component.scss']
})
export class AreastorerpresentationComponent {

  constructor(private readonly router: Router) { }

  redirect(): void {
    this.router.navigate(['regist-area']);
  }

}
