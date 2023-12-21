import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivelistComponent } from './activelist/activelist.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ArealistComponent } from './arealist/arealist.component';
import { ActivestorerComponent } from './activestorer/activestorer.component';
import { AreastorerComponent } from './areastorer/areastorer.component';

const routes: Routes = [
  { 
    path: '',
    title: 'ActivesManager',
    component: StartpageComponent
  },
  { 
    path: 'actives',
    title: 'Actives',
    component: ActivelistComponent
  },
  {
    path: 'areas',
    title: 'areas',
    component: ArealistComponent
  },
  {
    path: 'regist-active',
    title: 'Regist active',
    component: ActivestorerComponent
  },
  {
    path: 'regist-area',
    title: 'Regist area',
    component: AreastorerComponent
  },
  {
    path: 'actives/:areaid',
    title: 'Actives by AreaID',
    component: ActivelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
