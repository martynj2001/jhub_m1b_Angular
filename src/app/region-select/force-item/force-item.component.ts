import { Component, Input, OnInit } from '@angular/core';
import { Force } from 'src/app/shared/force.model';

@Component({
  selector: 'app-force-item',
  templateUrl: './force-item.component.html',
  styleUrls: ['./force-item.component.css']
})
export class ForceItemComponent implements OnInit {

  @Input() force: string;

  constructor() { }

  ngOnInit(): void {
  }

  onForceSelected(){
    //show detailed force information and 'see more button'
  }

}
