import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  devolver() {
    return [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: 'Earth',
        location: 'Earth',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: 'Citadel of Ricks',
        location: 'Earth',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Female',
        origin: 'Earth (Replacement Dimension)',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
      {
        id: 4,
        name: 'Beth Smith',
        status: 'Dead',
        species: 'Human',
        gender: 'Female',
        origin: 'Earth (Replacement Dimension)',
        location: 'Earth',
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      },
      {
        id: 5,
        name: 'Jerry Smith',
        status: 'Dead',
        species: 'Human',
        gender: 'Male',
        origin: 'Earth (Replacement Dimension)',
        location: 'Earth',
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      },
    ];
  }
}
