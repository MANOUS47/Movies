import { Component, inject, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { IMovies } from '../imovies';

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{

private readonly servicesService = inject(ServicesService)

Movies:IMovies[]=[];

  getMoviesData():void{

    this.servicesService.getMovie().subscribe(
      {next: (res)=>{
        
        this.Movies= res.results;
      }, 
      error: ()=>{
      }

        }
    )
  }

  ngOnInit(): void {

  this.getMoviesData();
  }

}
