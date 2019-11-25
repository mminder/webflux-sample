import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamSampleComponent } from "./stream-sample/stream-sample.component";
import { ExternalSystemSampleComponent } from "./external-system-sample/external-system-sample.component";

const routes: Routes = [
  {path: 'stream-sample', component: StreamSampleComponent},
  {path: 'external-sample', component: ExternalSystemSampleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
