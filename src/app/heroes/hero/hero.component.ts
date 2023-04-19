import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

  get capitalizadName():string {
    return this.name.toUpperCase();
  }

  getheroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(newName: string): void{
    // TODO:
    // throw: 'Metodo no implementado'
    this.name = newName;
  }

  changeAge(newAge: number): void{
    this.age = newAge;
  }

  resetForm(newName: string, newAge: number):void{
    this.name = newName;
    this.age = newAge;

    //Por que estas instrucciones estan fuera del ciclo de deteccion de Angular
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML='<h1>Desde Angular</h1>'
    });
  }
}
