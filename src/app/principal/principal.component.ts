import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personajes:any = null;
  numeros: number[]=[];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    // Bucle para genera 5 num aleatorios
    for (let i = 0; i < 5; i++) {
      this.numeros[i]=Math.floor((Math.random() * (50 - 1 + 1)) + 1);;
    }
    this.http.get("https://rickandmortyapi.com/api/character/"+this.numeros[0]+","+this.numeros[1]+","+this.numeros[2]+","+this.numeros[3]+","+this.numeros[4]).subscribe(
      result =>{
          this.personajes = result;
      },
      error =>{
        console.log('error getting');
      }
    )
  }

}
