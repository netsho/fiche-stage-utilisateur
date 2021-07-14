import { EnvoieMailService } from './../services/envoie-mail.service';
import { FicheRenseignement, EmailData } from './../../classes';
import { MatDialog } from '@angular/material/dialog';
import { FicheRenseignementService } from './../services/fiche-renseignement.service';
import { Component, OnInit } from '@angular/core';
import { ExtractionPdfComponent } from '../extraction-pdf/extraction-pdf.component';


@Component({
  selector: 'app-personnel-uga',
  templateUrl: './personnel-uga.component.html',
  styleUrls: ['./personnel-uga.component.scss']
})
export class PersonnelUgaComponent implements OnInit {

  listeFiches: FicheRenseignement[] = [];
  motifRefus: string = "";
  mailInfos: EmailData | null = null;

  constructor(private ficheService: FicheRenseignementService, private dialogue: MatDialog, private mailService: EnvoieMailService) { }

  ngOnInit(): void {
    this.ficheService.getFicheAll().subscribe(
      listeFiches => this.listeFiches = listeFiches
    );
  }

  visualiserFiche(nomEtudiant: string, prenomEtudiant: string): void{
    let dialogRef = this.dialogue.open(ExtractionPdfComponent, {
      width: '2000px',
      data: {
              nom: nomEtudiant,
              prenom: prenomEtudiant
      }
    });
  }

  refuserFiche(mailEtudiant: string, mailTuteur: string){
    this.mailInfos = {
      mailEtudiant: mailEtudiant,
      mailTuteur: mailTuteur,
      messageRefus: this.motifRefus
    }

    console.log(this.mailInfos);
    this.mailService.envoieMail(this.mailInfos).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  validerFiche(mailEtudiant: string){
    this.mailInfos = {
      mailEtudiant: mailEtudiant,
      mailTuteur: '',
      messageRefus: ''
    }

    this.mailService.envoieMailValidation(this.mailInfos).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

}
