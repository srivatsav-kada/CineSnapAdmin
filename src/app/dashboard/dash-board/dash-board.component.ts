import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  addNewMovieForm: FormGroup
   hours: number[] = Array.from({ length: 6 }, (_, i) => i);      // 0 - 23
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  constructor(private fb: FormBuilder , private movieService : MovieService) { }
  ngOnInit(): void {
    this.addNewMovieForm = this.fb.group({
      movieTitle: ['', [Validators.required]],
      heroEntrance: ['', [Validators.required]],
      heroineEntrance: ['', [Validators.required]],
      firstSong: ['', [Validators.required]],
      hoursVal : [null,[Validators.required]]
    })
  }

  get f(){
    return this.addNewMovieForm.controls
  }

  addNewMovie(){
    const payload = {
      name : this.f['movieTitle'].value,
      timestamps : [
        {label : 'Hero Entrance' , time : this.f['heroEntrance'].value},
        {label : 'Heroine Entrance' , time : this.f['heroineEntrance'].value},
        {label : 'First Song' , time : this.f['firstSong'].value},

      ]
    }
    this.movieService.addNewMovie(payload)
  }

  checkNums(){
    console.log(this.f['hoursVal'].value)
  }

}
