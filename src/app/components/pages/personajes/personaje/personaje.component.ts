import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Observable, take } from 'rxjs';

import { PersonajeService } from './../../../../shared/services/personaje.service';
import { Personaje } from './../../../../shared/interfaces/personaje.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [
    `
      

      .titulo-color {
        color: #239b56;
      }
      

    `,
  ],
})
export class PersonajeComponent implements OnInit {
  character: Observable<Personaje>;

  constructor(
    private route: ActivatedRoute,
    private personajeSvc: PersonajeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character = this.personajeSvc.getDetails(id);
    });
  }

  goBack() {
    this.location.back();
  }
}
