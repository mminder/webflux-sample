import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AppConstants } from "../app.constants";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: 'app-stream-sample',
  templateUrl: './stream-sample.component.html',
  styleUrls: [ './stream-sample.component.scss' ]
})
export class StreamSampleComponent implements OnInit, OnDestroy {

  messages: string[] = [];
  alive = true;

  constructor() {
  }

  ngOnInit() {
    this.observeMessages()
      .pipe(takeWhile(() => this.alive))
      .subscribe(message => this.messages.unshift(message));
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  private observeMessages(): Observable<string> {
    return new Observable<string>(obs => {

      const es = new EventSource(`${AppConstants.SAMPLE_API}/stream`);
      es.addEventListener('message', (evt) => {
        obs.next(JSON.parse(evt.data));
      });
      return () => es.close();
    });
  }

}
