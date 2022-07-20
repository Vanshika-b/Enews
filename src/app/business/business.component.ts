import { Component, OnInit } from '@angular/core';
import { EnewsapiService } from '../service/enewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api: EnewsapiService) { }

  businessdata:any=[];
  ngOnInit(): void {
    this.api.businews().subscribe((result)=>{
      console.log(result.articles);
      this.businessdata= result.articles;
    })
  }
 
}
