import { Entreprises } from './../../classes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//Cette classe est un service qui nous permettra d'utiliser ses fonctions dans tout le projet
export class EntrepriseService {

  //Déclaration de l'url du serveur, qui est déclaré dans l'environnements (=localhost:8080)
  private apiServerUrl = environment.apiBaseUrl;

  //Déclaration d'un objet de type HTTPClient et qui nous permettra d'utiliser les méthodes http pour comminuquer avec le serveur
  constructor(private http: HttpClient) { }

  //Les méthodes en dessous correspondent aux méthodes CRUD dans le serveur
  getAll(): Observable<Entreprises[]> {
    return this.http.get<Entreprises[]>(`${this.apiServerUrl}/etablissements/`);
  }

  addEntreprise(entreprise: Entreprises): Observable<Entreprises> {
    return this.http.post<Entreprises>(`${this.apiServerUrl}/etablissements/${entreprise.numeroSiret}`, entreprise);
  }

  updateEntreprise(entreprise: Entreprises): Observable<Entreprises> {
    return this.http.put<Entreprises>(`${this.apiServerUrl}/etablissements/${entreprise.numeroSiret}`, entreprise);
  }

  deleteEntreprise(entreprise: Entreprises): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/etablissements/${entreprise.numeroSiret}`);
  }
}
