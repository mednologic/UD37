import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personajes'
})
export class PersonajesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if(args!=null){
      //Aqui vendria la transformacion de los datos
    }
  }

}
