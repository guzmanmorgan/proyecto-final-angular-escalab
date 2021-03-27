import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  declarations: [CharacterListComponent, CharacterDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [CharacterListComponent]
})
export class CharactersModule { }
