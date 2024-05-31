// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JocuriComponent } from './components/jocuri/jocuri.component';
import { CantececComponent } from './components/cantecec/cantecec.component';
import { CompetitiiComponent } from './components/competitii/competitii.component';
import { LectiiComponent } from './components/lectii/lectii.component';
import { HeaderComponent } from './components/header/header.component';
import { ResurseComponent } from './components/resurse/resurse.component';
import { HomeComponent } from './components/home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FilterComponent } from './filter/filter.component';
import { AccordionLComponent } from './accordion-l/accordion-l.component';
import { AccordionCComponent } from './accordion-c/accordion-c.component';
import { AccordionJComponent } from './accordion-j/accordion-j.component';

@NgModule({
  declarations: [
    AppComponent,
    JocuriComponent,
    CantececComponent,
    CompetitiiComponent,
    LectiiComponent,
    HeaderComponent,
    ResurseComponent,
    HomeComponent,
    AccordionComponent,
    FilterComponent,
    AccordionLComponent,
    AccordionCComponent,
    AccordionJComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
