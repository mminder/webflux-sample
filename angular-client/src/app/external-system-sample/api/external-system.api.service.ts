import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LocalSystemResponseDto } from "./local-system-response.dto";
import { AppConstants } from "../../app.constants";

const EXT_SYSTEM_ENDPOINT = `${AppConstants.BACKEND_API}/external-system`;

@Injectable({
  providedIn: 'root'
})
export class ExternalSystemApiService {

  constructor(public http: HttpClient) {
  }

  getLocal(): Observable<LocalSystemResponseDto> {
    return this.http.get(`${EXT_SYSTEM_ENDPOINT}/local`)
      .pipe(
        map(res => res as LocalSystemResponseDto)
      );
  }
}
