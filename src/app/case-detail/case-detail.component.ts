import {Component, Input, OnInit} from '@angular/core';
import {Case} from '../models/case';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CaseService} from '../case.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {
  name = new FormControl('', Validators.required);
  birthdate = new FormControl('');
  date = new FormControl('');
  risk = new FormControl('');
  email = new FormControl('');
  sex = new FormControl('', Validators.required);
  phone = new FormControl('');
  address = new FormControl('');
  class = new FormControl('', Validators.required);

  @Input() case: Case;

  constructor(private formBuilder: FormBuilder, private caseService: CaseService) { }

  ngOnInit(): void {
  }

  updateData(): void {
    if ((this.name.status === 'VALID') && (this.sex.status === 'VALID') && (this.class.status === 'VALID')) {
      const case2 = {
        name: this.name.value,
        birthdate: this.birthdate.value,
        date: this.date.value,
        risk: this.risk.value,
        email: this.email.value,
        sex: this.sex.value,
        phone: this.phone.value,
        address: this.address.value,
        class: this.class.value
      };
      this.caseService.updateCase(case2, this.case._id).subscribe();
    } else {
    }
  }
}
