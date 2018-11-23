import { Component, OnInit } from '@angular/core';

import { ViewManagerService } from './../view-manager.service';
import { ConfigurationService } from './../configuration.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(public viewManagerService: ViewManagerService, public configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
