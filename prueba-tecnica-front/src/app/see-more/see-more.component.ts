import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../_services/movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieS: MovieService, private router: Router, private tokenStorageService: TokenStorageService) { }

  id: any = null;

  movie: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.movieS.getMovie(this.id)
      .subscribe(
        data => {
          this.movie = data;
        },
        error => {
          console.log(error)
        }
      )
  }

}
