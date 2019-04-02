import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

/*
  Generated class for the PlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlacesProvider {

  apiURL: string = "http://138.68.11.116:10015";

  constructor(public http: Http) {
    console.log('Hello PlacesProvider Provider');
  }

  getPlaces(arg1) {
    return this.http.get(`${this.apiURL}/place?sort=name`).map((res : Response ) => res.json());
  }

  getPlaceByCat(arg1){
    return this.http.get(`${this.apiURL}/category?name=${arg1}&&sort=name`).map((res : Response ) => res.json());
  }

  getPlaceBy2Cats(arg1,arg2){
    return this.http.get(`${this.apiURL}/category?name=${arg1}&&name=${arg2}&&sort=name`).map((res : Response ) => res.json());
  }

  getWalks(){
    return this.http.get(`${this.apiURL}/walk`).map((res : Response ) => res.json());
  }

  getPlaceById(id) {
    return this.http.get(`${this.apiURL}/place/${id}`).map((res : Response ) => res.json());
  }


}
