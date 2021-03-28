import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EpisodesListComponent } from './episodes/components/episodes-list/episodes-list.component';
import { LocationListComponent } from './locations/components/location-list/location-list.component';

import { AuthGuard } from './guards/auth.guard'; 
 


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharacterListComponent},
  { path: 'locations', component: LocationListComponent, canActivate: [AuthGuard]},
  { path: 'episodes', component: EpisodesListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
