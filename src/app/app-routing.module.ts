import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { RegionSelectComponent } from './region-select/region-select.component';
import { ForceStartComponent } from './region-select/region-simple/force-start/force-start.component';
import { RegionSimpleComponent } from './region-select/region-simple/region-simple.component';

const routes: Routes = [
  {path: '', redirectTo: '/regions', pathMatch: 'full'},
  {path: 'regions', component: RegionSelectComponent, children: [
      {path: '', component: ForceStartComponent },
      {path: ':id', component: RegionSimpleComponent }
  ]},
  {path: 'region-detail', component: RegionDetailComponent, children: [
    {path: ':id', component: RegionDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
