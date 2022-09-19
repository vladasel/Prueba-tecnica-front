import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../_services/serie.service';


@Component({
  selector: 'app-more-s',
  templateUrl: './more-s.component.html',
  styleUrls: ['./more-s.component.css']
})
export class MoreSComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serieS: SerieService, private router: Router, private tokenStorageService: TokenStorageService) { }

  id: any = null;
  serie: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.serieS.getSerie(this.id)
      .subscribe(
        data => {
          this.serie = data;
        },
        error => {
          console.log(error)
        }
      )
  }

}
