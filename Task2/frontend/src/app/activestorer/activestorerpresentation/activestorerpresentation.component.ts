import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activestorerpresentation',
  templateUrl: './activestorerpresentation.component.html',
  styleUrls: ['./activestorerpresentation.component.scss']
})
export class ActivestorerpresentationComponent {

  constructor(private router: Router) { }

  redirect(): void {
    this.router.navigate(['regist-active']);
  }


}
