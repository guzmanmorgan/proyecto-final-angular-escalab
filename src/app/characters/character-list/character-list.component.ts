import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { FinalSpaceService } from '../../services/final-space-s.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  
  public allCharacters: Character[];
  
  title: string = 'Characters'

  constructor(
    private finalSpaceS: FinalSpaceService,
    private router: Router
  ) { 

    finalSpaceS.getAllCharacters().subscribe(respAllCharacters => {
      this.allCharacters = respAllCharacters;
    });

  }

  ngOnInit() {
    console.log(this.allCharacters);
  }

  seeCharacterDetails(id: number) {
    this.router.navigate(['/character/', id]);
  }

}
