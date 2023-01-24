import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { filter, take } from 'rxjs/operators';

import {
  Personaje,
  RequesInfo,
} from './../../../../shared/interfaces/personaje.interface';
import { PersonajeService } from 'src/app/shared/services/personaje.service';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      a {
        text-decoration: none;
        color: green;
      }
    `,
  ],
})
export class ListadoComponent implements OnInit {
  characters: Personaje[] = [];

  private pageNumber: number = 1;

  private query: string = '';

  showUpButton: boolean = false;

  info: RequesInfo = {
    next: null,
  };

  private hideScroll: number = 200;

  private showScroll: number = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rickApi: PersonajeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrl();
  }

  ngOnInit(): void {
    //this.getDataService();
    this.getCharactersQuery();
  }

  @HostListener('window:scroll', []) // Escucha un evento del dom
  onWindowScroll(): void {
    const pos = window.pageYOffset;
    if (
      (pos ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.hideScroll
    ) {
      this.showUpButton = true;
    } else if (
      this.showUpButton &&
      (pos ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScroll
    ) {
      this.showUpButton = false;
    }
  }

  onScrollDown(): void {
    if (this.info.next) {
      this.pageNumber++;
      this.getDataService();
    }
  }

  onScrollUp(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private getDataService(): void {
    this.rickApi
      .searchPersonajes(this.query, this.pageNumber)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res.results.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }

  private getCharactersQuery(): void {
    this.route.queryParams.subscribe((params: ParamMap) => {
      console.log(params);
      this.query = params['q'];
      this.getDataService();
    });
  }

  private onUrl(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNumber = 1;
        this.getCharactersQuery();
      });
  }
}
