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

  apiURL: string = "http://localhost:1337";

  constructor(public http: Http) {
    console.log('Hello PlacesProvider Provider');
  }

<<<<<<< HEAD
  getPlaces(arg1) {
    return this.http.get(`${this.apiURL}/place`).map((res : Response ) => res.json());
=======
  getPlaces(arg1,arg2) {
    if(!arg2){
      arg2 = '';
    }
    return this.http.get(`${this.apiURL}/place/${arg1}/${arg2}`).map((res : Response ) => res.json());
>>>>>>> 3448851faddf48e9147a7ef371b6ba0b35f1f4c7
  }

  getPlaceByCat(arg1){
    return this.http.get(`${this.apiURL}/category?name=${arg1}`).map((res : Response ) => res.json());
  }

  getPlaceBy2Cats(arg1,arg2){
    return this.http.get(`${this.apiURL}/category?name=${arg1}&&name=${arg2}`).map((res : Response ) => res.json());
  }

  getWalks(){
    return this.http.get(`${this.apiURL}/walk`).map((res : Response ) => res.json());
  }

  getPlaceById(id) {
    return this.http.get(`${this.apiURL}/place/${id}`).map((res : Response ) => res.json());
  }


}
