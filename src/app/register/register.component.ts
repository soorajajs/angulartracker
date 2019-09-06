import { Component, OnInit } from '@angular/core';
import {CompanyService} from './company.service'
import{Company} from './company';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Config } from './config';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
 
})
export class RegisterComponent implements OnInit {
  comp: Observable<any[]>;
  hide = true;
 company: Company =new Company();
 
  submitted=false;
  constructor(private db: AngularFirestore,private companyService:CompanyService){
   
  }
  ngOnInit() {
    this.comp = this.db
.collection(Config.collection_endpoint).snapshotChanges().pipe(map(actions => {
   return actions.map(a => {
     //Get document data
     const data = a.payload.doc.data() as Company;
     //Get document id
     const id = a.payload.doc.id;
     //Use spread operator to add the id to the document data
     return { id, ...data };
   });
}));
   
  }
 
  save(registerForm:NgForm){
    this.companyService.createCompany(registerForm.value);
   this.company=new Company();
  }
  postData(registerForm:NgForm){
    this.submitted=true;
   
    this.companyService.createCompany(registerForm.value);
    this.company=new Company();
    
  }
 onSubmit(registerForm:NgForm){
   this.submitted=true;
   this.companyService.createCompany(registerForm.value);
   this.company=new Company();
 }
}

