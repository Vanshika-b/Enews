import { Component, OnInit } from '@angular/core';
import { EnewsapiService } from '../service/enewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api: EnewsapiService) { }
//technewsdata
techNewsData:any=[];
  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData= result.articles;
    })
  }

}
