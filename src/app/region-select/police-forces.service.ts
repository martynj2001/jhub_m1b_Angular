import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Force } from '../shared/force.model';
import { HttpCallService } from '../shared/http-call.service';

@Injectable({
  providedIn: 'root'
})
export class PoliceForcesService {

  policeForcesUpdated = new Subject<Force[]>();
  private forces: Force[];

  constructor() {}

  getForces(){
    return this.forces.slice();
  }

  setForces(forces: Force[]){
    this.forces = forces;
    this.policeForcesUpdated.next(this.forces.slice());
  }
  setforcesDetail(index: number){

  }

  getForceDetail(index: number){
    console.log(this.forces);
    console.log(index);
    console.log(this.forces[index]);
    return this.forces[index];
  }
  // fetchForces(){
  //   this.httpCallService.fetchAPI('forces')
  //   .pipe(map(response => {this.extractForces(response)}))
  //   .subscribe(); 
  //   this.policeForcesUpdated.next(this.forces.slice());
  // }
}
