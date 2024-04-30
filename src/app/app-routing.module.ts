import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CantececComponent } from './components/cantecec/cantecec.component';
import { CompetitiiComponent } from './components/competitii/competitii.component';
import { LectiiComponent } from './components/lectii/lectii.component';
import { JocuriComponent } from './components/jocuri/jocuri.component';
import { ResurseComponent } from './components/resurse/resurse.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'resurse',
    component: ResurseComponent,
    children: [
      { path: 'lectii', component: LectiiComponent },
      { path: 'jocuri', component: JocuriComponent },
      { path: 'cantece', component: CantececComponent },
      { path: 'competitii', component: CompetitiiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
