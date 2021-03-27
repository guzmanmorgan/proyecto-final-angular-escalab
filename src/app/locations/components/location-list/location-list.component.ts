import { Component, OnInit } from '@angular/core';
import { Location } from '../../../interfaces/location';
import { FinalSpaceService } from '../../../services/final-space-s.service'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  public allLocations: Location[];
  title: string = 'Locations'

  constructor(
    private finalSpaceS: FinalSpaceService
  ) { 
    finalSpaceS.getAllLocations().subscribe(respAllLocations => {
      this.allLocations = respAllLocations;
    });
   }

  ngOnInit() {
  }

}
