import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service/services.service';
@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  data : any = [];
  constructor(private Service: ServicesService){}
  ngOnInit(): void {
    this.Service.getData().subscribe(response =>{
      this.data=response;
      console.log(response); 
    })
  }
}
