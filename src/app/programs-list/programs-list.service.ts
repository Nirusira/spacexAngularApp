import { Injectable } from '@angular/core';
import { ProgramsService } from '../programs.service';


@Injectable({
    providedIn: 'root'
  })

export class ProgramsListService {

  constructor(
    private programService: ProgramsService
  ) { }

  public getProgramsList(selectedYear, launchSuccess, landingSuccess, callback) {
    this.programService.getProgramsList(selectedYear, launchSuccess, landingSuccess)
    .subscribe(
        (response) => {
            return callback(null, response);
        },
        (error) => {
            return callback(error, null);
        }
    )
  }

}
