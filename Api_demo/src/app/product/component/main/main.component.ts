import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  data: any[] = [];
  constructor(private Service: ServicesService) {}
  ngOnInit(): void {
    this.Service.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
