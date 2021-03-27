import { Component, OnInit } from '@angular/core';
import { Episode } from '../../../interfaces/episode';
import { FinalSpaceService } from '../../../services/final-space-s.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css'] 
})
export class EpisodesListComponent implements OnInit {

  public allEpisodes: Episode[];
  title: string = 'Episodes'

  constructor(
    private finalSpaceS: FinalSpaceService
  ) {
    finalSpaceS.getAllEpisodes().subscribe(respAllEpisodes => {
      this.allEpisodes = respAllEpisodes;
    });
   }

  ngOnInit() {
    console.log(this.allEpisodes);
  }

}
