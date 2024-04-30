// resurse.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LectiiComponent } from '../components/lectii/lectii.component';
import { JocuriComponent } from '../components/jocuri/jocuri.component';
import { CompetitiiComponent } from '../components/competitii/competitii.component';
import { CantececComponent } from '../components/cantecec/cantecec.component';

@NgModule({
  declarations: [
    LectiiComponent,
    JocuriComponent,
    CantececComponent,
    CompetitiiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'jocuri', component: JocuriComponent },
      { path: 'competitii', component: CompetitiiComponent },
      { path: 'cantece', component: CantececComponent },
      { path: 'lectii', component: LectiiComponent },
    ]),
  ],
})
export class ResurseModule {}
