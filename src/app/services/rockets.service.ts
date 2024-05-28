import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para trabajar con la API externa

// Creando los variables del listado de cohetes y la URL para consumir la API de forma general
let rockets: Array<string>  = ['falcon1', 'falcon9'];
let serviceUrl: string = 'https://api.spacexdata.com/v3/rockets/';

export interface RocketInterface{
  rocket_id: string;
  cost_per_launch: number;
  rocket_name: string;
  height: {meters: number};
  flickr_images:  Array<string>;
  company: string;
}

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) { }

  get(){
    // Trae todo el arreglo
    return rockets.slice();
  }

  add(rocket: string){
    rockets.push(rocket);
    return this.get();
  }

  remove(rocket: string){
    // indexOf devuelve el primer elemento y lo quita con splice
    rockets.splice(rockets.indexOf(rocket), 1);
    return this.get();
  }

  load(){
    return this.http.get<Array<RocketInterface>>(serviceUrl);
  }

}
