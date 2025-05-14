import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private firestore : AngularFirestore) { }

  addNewMovie(movie){
    console.log('---')
    this.firestore.collection('movies').add(movie)
    .then(()=>{
      console.log("Successfuuly added the movie")
    })
    console.log('sd')
  }
}
