import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './../configuration.service';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(public configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
