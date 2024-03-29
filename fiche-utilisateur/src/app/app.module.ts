import { DataService } from './services/data.service';
import { InfosStageService } from './services/infos-stage.service';
import { TuteurService } from './services/tuteur.service';
import { ServiceGestionService } from './services/service-gestion.service';
import { EntrepriseService } from './services/entreprise.service';
import { EtudiantService } from './services/etudiant.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheRenseignementComponent } from './fiche-renseignement/fiche-renseignement.component';
import { PersonnelUgaComponent } from './personnel-uga/personnel-uga.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { RechercheFicheComponent } from './recherche-fiche/recherche-fiche.component';
import { ExtractionPdfComponent } from './extraction-pdf/extraction-pdf.component';
import { MatDialogModule } from '@angular/material/dialog';
import { VisualisationPdfComponent } from './visualisation-pdf/visualisation-pdf.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SuppressionFicheComponent } from './suppression-fiche/suppression-fiche.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FicheRenseignementComponent,
    PersonnelUgaComponent,
    HeaderComponent,
    RechercheFicheComponent,
    ExtractionPdfComponent,
    VisualisationPdfComponent,
    SuppressionFicheComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatDialogModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    EtudiantService,
    EntrepriseService,
    ServiceGestionService,
    TuteurService,
    InfosStageService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
