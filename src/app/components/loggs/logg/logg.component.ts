import { Component, OnInit } from '@angular/core';
import { LoggService } from 'src/app/services/loggs/logg.service';
@Component({
  selector: 'app-logg',
  templateUrl: './logg.component.html',
  styleUrls: ['./logg.component.css']
})
export class LoggComponent implements OnInit {
  loggs: any[]=[];
  loading = false;
  constructor(private loggService:LoggService) { 
    this.loading = true;
    this.loggService.getAllLoggs().subscribe((data:any)=>{
      this.loggs = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }
}
