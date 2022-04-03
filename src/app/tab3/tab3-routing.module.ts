import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { HighLightDirective } from '../directives/highlight.directive';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }
];

@NgModule({
  declarations: [HighLightDirective],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HighLightDirective]
})
export class Tab3PageRoutingModule { }
