import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Force } from './force.model';
import { PoliceForcesService } from '../region-select/police-forces.service';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  private url = "https://data.police.uk/api/";
  
  constructor( private http: HttpClient, private policeForceservice: PoliceForcesService) {}

  extractForces(response: any){

    const forces: Force[] = [];

    for (let force of response){
      let newForce = new Force(force.id, force.name, '','',[],'');
      forces.push(newForce);
    }
    this.policeForceservice.setForces(forces)
  }

  fetchAPI(url: string){
    const apiUrl = this.url + url;
    this.http.get<any>(apiUrl)
    .pipe(map(
      (response) => {
        this.extractForces(response);
      }
    ))
    .subscribe();
  }


}

