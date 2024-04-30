import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JocuriComponent } from '../components/jocuri/jocuri.component';
import { CompetitiiComponent } from '../components/competitii/competitii.component';
import { CantececComponent } from '../components/cantecec/cantecec.component';
import { LectiiComponent } from '../components/lectii/lectii.component';

const routes: Routes = [
  { path: 'jocuri', component: JocuriComponent },
  { path: 'competitii', component: CompetitiiComponent },
  { path: 'cantece', component: CantececComponent },
  { path: 'lectii', component: LectiiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResurseRoutingModule {}
