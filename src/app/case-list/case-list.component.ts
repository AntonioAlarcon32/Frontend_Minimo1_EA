import { Component, OnInit } from '@angular/core';
import {CaseService} from '../case.service';
import {Case} from '../models/case';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {

  cases: Case[];
  selectedCase: Case;
  addCaseClicked = false;

  constructor(private caseService: CaseService) { }

  getCases(): void {
    this.caseService.getCases().subscribe(cases => this.cases = cases);
  }
  onSelect(caseClicked: Case): void {
    this.selectedCase = caseClicked;
  }
  ngOnInit(): void {
    this.getCases();
  }
  clickedAddCase(): void {
    if (this.addCaseClicked === true){
      this.addCaseClicked = false;
    }
    else {
      this.addCaseClicked = true;
    }
  }

}
