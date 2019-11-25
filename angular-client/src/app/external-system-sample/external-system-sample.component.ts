import { Component, OnInit } from '@angular/core';
import { ExternalSystemApiService } from "./api/external-system.api.service";

@Component({
  selector: 'app-external-system-sample',
  templateUrl: './external-system-sample.component.html',
  styleUrls: [ './external-system-sample.component.scss' ]
})
export class ExternalSystemSampleComponent implements OnInit {

  message: string;

  constructor(private externalSystemApi: ExternalSystemApiService) {
  }

  ngOnInit() {
    this.externalSystemApi.getLocal().subscribe(apiResponse => this.message = apiResponse.message);
  }

}
