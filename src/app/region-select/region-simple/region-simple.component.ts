import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Force } from '../../shared/force.model';
import { PoliceForcesService } from '../police-forces.service';

@Component({
  selector: 'app-region-simple',
  templateUrl: './region-simple.component.html',
  styleUrls: ['./region-simple.component.css']
})
export class RegionSimpleComponent implements OnInit {

  force: Force;
  id: number;

  constructor(private route: ActivatedRoute,
              private policeForceService: PoliceForcesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(`calling for Index: ${this.id}`)
        this.force = this.policeForceService.getForceDetail(this.id);
      }
    )

  }

}
