import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Area } from './areas';
import { GET_AREAS } from '../../../querys';

@Component({
  selector: 'app-arealist',
  templateUrl: './arealist.component.html',
  styleUrls: ['./arealist.component.scss']
})
export class ArealistComponent implements OnInit {

  areaList!: Area[];  

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_AREAS
    }).valueChanges.subscribe(({data}) => {
      this.areaList = (data as any).areas as Area[];
    })
  }

}
