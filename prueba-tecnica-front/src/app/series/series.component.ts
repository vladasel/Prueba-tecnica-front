import { Component, OnInit } from '@angular/core';
import { SerieService } from '../_services/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: any = null;
  constructor(private serviceS:SerieService) { }

  ngOnInit(): void {
    this.seeSeries();
  }
  seeSeries(): void {
    this.serviceS.getPopularSerie()
      .subscribe(
        data => {
          this.series = data;
          console.log(data);

        });
  }
}
