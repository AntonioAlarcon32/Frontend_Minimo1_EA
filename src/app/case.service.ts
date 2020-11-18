import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Case} from './models/case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private url = 'http://localhost:3000/cases';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(this.url);
  }
  postCase(case1: any): Observable<Case> {
    return this.http.post<Case>(this.url, case1, this.httpOptions);
  }
  updateCase(case1: any, id: string): Observable<Case> {
    return this.http.put<Case>(this.url + '/' + id, case1, this.httpOptions);
  }
}
