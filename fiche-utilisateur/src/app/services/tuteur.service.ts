import { Tuteurs } from './../../classes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//Cette classe est un service qui nous permettra d'utiliser ses fonctions dans tout le projet
export class TuteurService {

  //Déclaration de l'url du serveur, qui est déclaré dans l'environnements (=localhost:8080)
  private apiServerUrl = environment.apiBaseUrl;

  //Déclaration d'un objet de type HTTPClient et qui nous permettra d'utiliser les méthodes http pour comminuquer avec le serveur
  constructor(private http: HttpClient) { }

  //On utilise la méthode POST de Http pour une insertion dans la BD, le paramaètre est l'url du serveur (suffixé par /tuteurs/mail comme présent
  //dans la classe controller dans le backend) ainsi que l'objet tuteur que nous souhaitons inserer. Ensuite on regarde si le serveur nous
  //renvoie une erreur. Dans le cas où l'envoie n'a pas été effectuée, ensuite on récupère le message à afficher à l'utilisateur.
  addTuteur(tuteur: Tuteurs): Observable<Tuteurs> {
    return this.http.post<Tuteurs>(`${this.apiServerUrl}/tuteurs/${tuteur.mail}`, tuteur).pipe(
      catchError(error => {
        let errorMsg: string;
        if(error.error instanceof ErrorEvent){
          errorMsg = `Error : ${error.error.message}`;
        } else {
          errorMsg = this.getServerError(error);
        }
        return throwError(errorMsg);
      })
    );
  }

  updateTuteur(tuteur: Tuteurs): Observable<Tuteurs> {
    return this.http.put<Tuteurs>(`${this.apiServerUrl}/tuteurs/${tuteur.mail}`, tuteur).pipe(
      catchError(error => {
        let errorMsg: string;
        if(error.error instanceof ErrorEvent){
          errorMsg = `Error : ${error.error.message}`;
        } else {
          errorMsg = this.getServerError(error);
        }
        return throwError(errorMsg);
      })
    );
  }

  //Cette méthode récupère le status code (en erreur) comme prédéfini dans le serveur, et on affiche un message clair suivant l'erreur reçue.
  getServerError(error: HttpErrorResponse): string {
    switch (error.status){
      case 403 : {
        return `Le tuteur existe déjà dans la base de données, vous ne pouvez pas en créer de nouveau.`;
      }
      case 500 : {
        return `Internal server error: ${error.message}`;
      }
      default: {
        return `Unknown server error: ${error.message}`;
      }
    }
  }
}
