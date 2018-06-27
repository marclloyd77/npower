import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service';
import { Film } from './interface/film';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {

  data: Film [];

  constructor( private _dataService: DataService ) {
  }

  ngOnInit() {
    this.data = this._dataService.getData();
  }

}
