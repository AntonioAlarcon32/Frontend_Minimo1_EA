import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CaseService} from '../case.service';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.css']
})
export class CaseFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private caseService: CaseService) { }
  name = new FormControl('', Validators.required);
  birthdate = new FormControl('');
  date = new FormControl('');
  risk = new FormControl('');
  email = new FormControl('');
  sex = new FormControl('', Validators.required);
  phone = new FormControl('');
  address = new FormControl('');
  class = new FormControl('', Validators.required);

  ngOnInit(): void {
  }
  submitData(): void {
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
      this.caseService.postCase(case2).subscribe();
    }
    else {
    }

  }
}
