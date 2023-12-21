import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule, APOLLO_OPTIONS, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivepresentationComponent } from './activelist/activepresentation/activepresentation.component';
import { ActivelistComponent } from './activelist/activelist.component';
import { StartpageComponent } from './startpage/startpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ActiveitemComponent } from './activelist/activeitem/activeitem.component';
import { ArealistComponent } from './arealist/arealist.component';
import { AreapresentationComponent } from './areapresentation/areapresentation.component';
import { AreaitemComponent } from './areaitem/areaitem.component';
import { ActivestorerComponent } from './activestorer/activestorer.component';
import { ActivestorerpresentationComponent } from './activestorer/activestorerpresentation/activestorerpresentation.component';
import { ActivecreatorComponent } from './activestorer/activecreator/activecreator.component';
import { AreastorerComponent } from './areastorer/areastorer.component';
import { AreastorerpresentationComponent } from './areastorer/areastorerpresentation/areastorerpresentation.component';
import { AreacreatorComponent } from './areastorer/areacreator/areacreator.component';

const uri = 'http://localhost:3000/graphql';

function createApollo(httplink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httplink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ActivepresentationComponent,
    ActivelistComponent,
    StartpageComponent,
    ActiveitemComponent,
    ArealistComponent,
    AreapresentationComponent,
    AreaitemComponent,
    ActivestorerComponent,
    ActivestorerpresentationComponent,
    ActivecreatorComponent,
    AreastorerComponent,
    AreastorerpresentationComponent,
    AreacreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink]
  }],
 bootstrap: [AppComponent]
})
export class AppModule { }
