import { Component, OnInit } from '@angular/core';
import { ProgramsListService } from './programs-list.service';

@Component({
  selector: 'programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.css']
})

export class ProgramsListComponent implements OnInit{
  public programsList: any[] = [];
  public launchYears: any[] = [
    {year: '2006', isChecked: false},
    {year: '2007', isChecked: false},
    {year: '2008', isChecked: false},
    {year: '2009', isChecked: false},
    {year: '2010', isChecked: false},
    {year: '2011', isChecked: false},
    {year: '2012', isChecked: false},
    {year: '2013', isChecked: false},
    {year: '2014', isChecked: false},
    {year: '2015', isChecked: false},
    {year: '2016', isChecked: false},
    {year: '2017', isChecked: false},
    {year: '2018', isChecked: false},
    {year: '2019', isChecked: false},
    {year: '2020', isChecked: false}];
  public launchSuccess: boolean = false;
  public landingSuccess: boolean = false;
  public listLoading: boolean = false;

  constructor( private programListService: ProgramsListService ) { }

  ngOnInit() {
    this.getProgramsList(null);
  }

  public getProgramsList(selectedYear) {
    this.programsList = [];
    this.listLoading = true;
    this.programListService.getProgramsList(selectedYear, this.launchSuccess, this.landingSuccess, (err, res) => {
    this.listLoading = false;
    if (err) {
      } else {
        this.programsList = res;
      }
    })
  }

  public getSelectedPrograms() {
    const selectedYear = this.launchYears.filter(year => year['isChecked'])[0];
    if (selectedYear) {
    this.getProgramsList(selectedYear['year']);
    } else {
      this.getProgramsList(null);
    }
  }

  public onChange(event, year) {
    if (event.target) {
      this.launchYears.forEach(year => year['isChecked'] = false);
      year['isChecked'] = event.target.checked;
      this.getSelectedPrograms();
    }
  }
}
