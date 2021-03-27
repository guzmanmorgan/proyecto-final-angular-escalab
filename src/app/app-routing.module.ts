import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EpisodesListComponent } from './episodes/components/episodes-list/episodes-list.component';
import { LocationListComponent } from './locations/components/location-list/location-list.component';
 


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharacterListComponent},
  { path: 'locations', component: LocationListComponent},
  { path: 'episodes', component: EpisodesListComponent},
  //{ path: 'characters', loadChildren: () => import("./characters/characters.module").then(mod => mod.CharactersModule) },
  { path: 'login', component: LoginComponent },
  
  //{ path: '', component: AuthenticationComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
