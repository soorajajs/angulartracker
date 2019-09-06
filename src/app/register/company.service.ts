import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {AngularFirestore,FirestoreSettingsToken,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import{Company} from './company';
import { Config } from './config';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  

  /*private dbpath:'register';
  companyRef:AngularFireList<Company>=null;
    constructor(private db : AngularFireDatabase){
      this.companyRef=this.db.list(this.dbpath);
    }*/
  model:Company;
    constructor(
      private afs: AngularFirestore,
    ) {
      this.model = {
        gstNo:'',
    contactNumber:0,
    contactName:'',
    phoneNo:0,
    address:'',
    companyName:''
      }



      }
   
   
    createCompany(company: Company): Observable<any> {
      this.afs.collection<Company>(Config.collection_endpoint).add(company).then((newCompany) => {
        return newCompany;}).catch((err) => {
        return err.toLocaleString();
      });
      return;
    }
  
  
  
  
   /*.then((newCompany) => {
        return newCompany;
      })*/
  
  
  
  
  
  
  
  
  
  
  
  
    /*  createCompany(company:Company)
   // postData(companyName:string)
    {
      
   this.companyRef.push(company);
   }
  /* private handleError(error){
console.log(error);

   } */
   
}
