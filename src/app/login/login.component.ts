import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Config } from './config';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore,AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;

  password: string;
  
  constructor(private router: Router,private afauth:AngularFireAuth,private afs:AngularFirestore) { }

  ngOnInit() {
  }
  login() : void {
let collref=this.afs.collection(Config.collection_endpoint).ref;
let passref=collref.where('password','==',this.password).where('companyName','==',this.username);
//let queryref=collref
    passref.get().then((snapShot)=>{
      if(snapShot.empty){
        alert("Invalid credentials");
      }
      else{
        this.router.navigate(["vehical"]);
        localStorage.setItem("user",this.username);
      }
  })

  }

  }

