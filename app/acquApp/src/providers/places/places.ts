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

  apiURL: string = "http://localhost:8111";

  constructor(public http: Http) {
    console.log('Hello PlacesProvider Provider');
  }

  getPlaces(arg1,arg2) {
    return this.http.get(`${this.apiURL}/place/${arg1}`).map((res : Response ) => res.json());
  }

  getHotels() {
    return this.http.get(`${this.apiURL}/place/hotels`).map((res : Response ) => res.json());
  }

  getPlaceById(id) {
    return this.http.get(`${this.apiURL}/place/${id}`).map((res : Response ) => res.json());
  }


}
