import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
    input {
      width: 100%;
    }
  `]
})
export class SearchComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  onSearch(value: string){
    if(value && value.length > 3){
      this.router.navigate(['/listado'], {
        queryParams: { q: value },
      });
    }
  }

}
