import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Config } from './config';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

interface Vehical{
  vehicalno:string;
}
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
lat:number;                //51.678418;
lng:number ;


 user =localStorage.getItem('user');
 
 
 
 logout():void{
	localStorage.clear();
	this.router.navigate([""]);
}
                  //7.809007;
/*locationChosen=false;
                  constructor() { }
onChooseLocation(event){
  this.lat=event.coords.lat;
  this.lng=event.coords.lng;
  this.locationChosen=true;
}*/
postsCol: AngularFirestoreCollection<Vehical>;
comp: Observable<Vehical[]>;
constructor(private router: Router,private db: AngularFirestore){
 
  }
  ngOnInit() {
  


   /* this.comp = this.db.collection(Config.collection_endpoint).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data() as Vehical ;
        //Get document id
        const id = a.payload.doc.id;
        //Use spread operator to add the id to the document data
        return { id, ...data };
      });
   }));
 */
this.getUserLocation()
 
}


private getUserLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
    });
  }
}
}
