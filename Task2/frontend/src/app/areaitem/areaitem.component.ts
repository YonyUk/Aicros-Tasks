import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ACTIVES, DELETE_AREA } from '../../../querys';
import { Active } from '../activelist/actives';

@Component({
  selector: 'app-areaitem',
  templateUrl: './areaitem.component.html',
  styleUrls: ['./areaitem.component.scss']
})
export class AreaitemComponent {

  @Input()
  ID!: string;

  @Input()
  Name!: string;

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  deleteSelf(): void {
    this.apollo.watchQuery({
      query: GET_ACTIVES
    }).valueChanges.subscribe(({ data }) => {
      const actives: Active[] = (data as any).actives as Active[];
      if (this.selfHasActives(actives))
        alert("Can't delete this item 'cause it has actives inside");
      else
        this.apollo.mutate({
          mutation: DELETE_AREA,
          variables: {
            input: this.ID
          }
        }).subscribe(({ data }) => {
          this.apollo.client.cache.reset();
          this.router.navigate(['/areas']);
        });
    });
  }

  showActives(): void {
    this.router.navigate([`/actives/${this.ID}`]);
  }

  selfHasActives(actives: Active[]): boolean {
    for (let i = 0; i < actives.length; i++)
      if (actives[i].Area === this.ID)
        return true;
    return false;
  }
}
