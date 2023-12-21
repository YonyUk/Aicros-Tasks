import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Area } from 'src/app/arealist/areas';
import { SAVE_AREA } from '../../../../querys';

@Component({
  selector: 'app-areacreator',
  templateUrl: './areacreator.component.html',
  styleUrls: ['./areacreator.component.scss']
})
export class AreacreatorComponent {

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  @Input()
  ID!: string;

  @Input()
  Name!: string;

  Error: boolean = false;

  MessageError!: string;

  storeArea() {
    const area: Area = {
      AreaID: this.ID,
      AreaName: this.Name
    };
    this.Error = false;
    this.apollo.mutate({
      mutation: SAVE_AREA,
      variables: {
        input: area
      }
    }).pipe(catchError(error => {
      this.Error = true;
      this.MessageError = error.message;
      return throwError(error);
    })).subscribe(res => {
        this.router.navigate(['/areas']);
        this.apollo.client.resetStore();
    });
  }

}
