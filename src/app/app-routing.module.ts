import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
{
  path: 'principal',
  component: PrincipalComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
path: 'personajes',
component: PersonajesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
