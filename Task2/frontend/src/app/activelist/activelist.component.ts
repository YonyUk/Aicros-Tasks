import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Active } from './actives';
import { GET_SUBGROUP_ACTIVES } from '../../../querys';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activelist',
  templateUrl: './activelist.component.html',
  styleUrls: ['./activelist.component.scss']
})
export class ActivelistComponent implements OnInit {

  constructor(
    private readonly apollo: Apollo,
    private readonly router: Router
  ) { }

  activeList!: Active[];

  AreaID!: string;

  Page: number = 0;

  MoreData: boolean = true;

  ngOnInit(): void {
    const path = this.router.url.split('/');
    if (path.length > 2) {
      this.AreaID = path[2];
    }
    this.apollo.watchQuery({
      query: GET_SUBGROUP_ACTIVES,
      variables: {
        input: this.Page
      }
    }).valueChanges.subscribe(({ data }) => {
      this.activeList = (data as any).activeSubGroup as Active[];
      if (this.AreaID)
        this.activeList = this.activeList.filter(active => active.Area === this.AreaID);
    });
  }

  nextPage() {
    const path = this.router.url.split('/');
    if (path.length > 2) {
      this.AreaID = path[2];
    }
    this.apollo.watchQuery({
      query: GET_SUBGROUP_ACTIVES,
      variables: {
        input: this.Page + 1
      }
    }).valueChanges.subscribe(({ data }) => {
      const new_data: Active[] = (data as any).activeSubGroup as Active[];
      if (new_data.length === 0)
        this.MoreData = false;
      else {
      	if(this.AreaID)
            this.activeList = new_data.filter(active => active.Area === this.AreaID);
        else
            this.activeList = new_data;
        this.Page += 1;
      }
    });
  }

  previousPage() {
    this.MoreData = true;
    const path = this.router.url.split('/');
    if (path.length > 2) {
      this.AreaID = path[2];
    }
    this.apollo.watchQuery({
      query: GET_SUBGROUP_ACTIVES,
      variables: {
        input: this.Page - 1
      }
    }).valueChanges.subscribe(({ data }) => {
      const new_data: Active[] = (data as any).activeSubGroup as Active[];
      if (this.AreaID)
          this.activeList = new_data.filter(active => active.Area === this.AreaID);
      else
          this.activeList = new_data;
      this.Page -= 1;
    });
  }

}
