import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Force } from '../shared/force.model';
import { HttpCallService } from '../shared/http-call.service';
import { PoliceForcesService } from './police-forces.service';


@Component({
  selector: 'app-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.css']
})
export class RegionSelectComponent implements OnInit, OnDestroy {

  forces: Force[];

  subscription: Subscription;


  constructor(private httpCallService: HttpCallService, private policeForcesService: PoliceForcesService) { }

  ngOnInit(): void {

    this.httpCallService.fetchAPI('forces'); 
    this.subscription = this.policeForcesService.policeForcesUpdated.subscribe(
      (newForces: Force[]) =>{ 
        this.forces = newForces;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
