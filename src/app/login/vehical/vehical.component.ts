import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { Config } from './config';
import {NgForm} from '@angular/forms';
import {AngularFirestore,FirestoreSettingsToken,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html',
  styleUrls: ['./vehical.component.scss']
})
export class VehicalComponent implements OnInit {

  constructor(private router: Router,private afs: AngularFirestore) { }
login_username=localStorage.getItem("user");
  ngOnInit() {
  }

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
onSubmit(vehicalForm:NgForm){
  this.afs.collection(Config.collection_endpoint).doc(this.login_username).set({
    vehicalno:vehicalForm.value 
  })
}


  logout():void{
	localStorage.clear();
	this.router.navigate([""]);
}
}
