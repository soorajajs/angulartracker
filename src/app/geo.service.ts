import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as GeoFire from "geofire";
@Injectable({
  providedIn: 'root'
})

export class GeoService {
dbRef:any;
geoFire:any;
  constructor(private db:AngularFireDatabase) {
this.dbRef=this.db.list('/location');
this.geoFire=new GeoFire(this.dbRef.$ref);

}
setLocation(key:string,coords:Array<number>){
  this.geoFire.set(key,coords)
  .then(_=>console.log('location Updated'))
  .catch(err=>console.log(err))
}

}
