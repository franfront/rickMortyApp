import { Personaje, RequesInfo } from './../../../../shared/interfaces/personaje.interface';
import { Component, OnInit } from '@angular/core';
import { PersonajeService } from 'src/app/shared/services/personaje.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      a{
        text-decoration: none;
        color: green;
      }
    `
  ]
})
export class ListadoComponent implements OnInit {

  characters: Personaje[] = []

  private pageNumber: number = 1;

  private query: string = "";

  info: RequesInfo = {
    next: null,
  }

  private hideScroll: number = 200;

  private showScroll: number = 500;

  constructor(private rickApi: PersonajeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.getDataService();
   this.getCharactersQuery()
  }


  private getDataService(): void{
    this.rickApi.searchPersonajes(this.query, this.pageNumber)
    .pipe(
      take(1)
    ).subscribe((res:any) =>{

      if(res.results.length){
        const {info, results} = res
        this.characters = [...this.characters, ...results];
        this.info = info;

      } else{
        this.characters = [];
      }


    })
  }


  private getCharactersQuery(): void{
     this.route.queryParams.subscribe( (params: ParamMap) =>{
      console.log(params);
        this.query = params['q'];
        this.getDataService();
     } )
  }

  private onUrl(): void{
    this.
  }

}
