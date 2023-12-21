import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { DELETE_ACTIVE } from '../../../../querys';

@Component({
  selector: 'app-activeitem',
  templateUrl: './activeitem.component.html',
  styleUrls: ['./activeitem.component.scss']
})
export class ActiveitemComponent {

  @Input()
  ID!: string;

  @Input()
  Type!: string;

  @Input()
  Location!: string;

  @Input()
  Propierties!: any;

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  deleteSelf(): void {
    this.apollo.mutate({
      mutation: DELETE_ACTIVE,
      variables:{
        input: this.ID
      }
    }).subscribe(({data}) => {
      this.apollo.client.cache.reset();
      this.router.navigate(['/actives']);
    })
  }

}
