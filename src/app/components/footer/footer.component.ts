import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  autor: any = 'Juan Pablo Orozco';
  autor2: any = 'Steven Calderon Guzman';
  anio :number;
  constructor() { 

    this.anio = new Date().getFullYear();
  }
  ngOnInit(): void {
  }

}
