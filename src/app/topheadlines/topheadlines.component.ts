import { Component, OnInit } from '@angular/core';
import { EnewsapiService } from '../service/enewsapi.service';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {

  constructor(private api: EnewsapiService) { }
//display headlines datail
topHeadLinesData:any = []; 
  ngOnInit(): void {
    this.api.eHeadLines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadLinesData= result.articles;
    })
  }

}
