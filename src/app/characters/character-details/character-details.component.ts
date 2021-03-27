import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalSpaceService } from '../../services/final-space-s.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  public character: Character;

  constructor(
    private finalSpaceS: FinalSpaceService,
    private activatedRoute: ActivatedRoute
    ) {
      activatedRoute.params.subscribe(params => {
        console.log('params -->', params);
        finalSpaceS.getCharacterById(params.id).subscribe(respCharacter => {
          this.character = respCharacter;
        })
      })
    }

  ngOnInit() {
  }

}
