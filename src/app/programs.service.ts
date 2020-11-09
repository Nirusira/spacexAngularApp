import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProgramsService {

  constructor(
    private http: HttpClient
  ) { }

  public getProgramsList(selectedYear, launchSuccess, landingSuccess): Observable<any> {
    let appendQueryParam = '';
    if(selectedYear) {
      appendQueryParam += '&launch_year=' + selectedYear;
    }
    if(launchSuccess) {
      appendQueryParam += '&launch_success=true';
    }
    if(landingSuccess) {
      appendQueryParam += '&land_success=true';
    }
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100` + appendQueryParam)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error)
  }
}
