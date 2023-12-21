import { Component, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Active } from '../../activelist/actives';
import { SAVE_ACTIVE } from '../../../../querys';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-activecreator',
  templateUrl: './activecreator.component.html',
  styleUrls: ['./activecreator.component.scss']
})
export class ActivecreatorComponent {

  @Input()
  ID!: string;

  @Input()
  Type!: string;

  @Input()
  Location!: string;

  @Input()
  AreaID!: string;

  Error: boolean = false;

  MessageError!: string;

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  saveActive() {
    const active: Active = {
      ActiveID: this.ID,
      ActiveType: this.Type,
      ActiveLocation: this.Location,
      Area: this.AreaID,
      ActivePropierties: "Ninguna propiedad hasta ahora"
    };
    this.Error = false;
    this.apollo.mutate({
      mutation: SAVE_ACTIVE,
      variables: {
        input: active
      }
    }).pipe(catchError(error => {
      this.Error = true;
      this.MessageError = error.message;
      return throwError(error);
    })).subscribe(({ data }) => {
      this.router.navigate(['/actives']);
      this.apollo.client.resetStore();
    });
  }

}
