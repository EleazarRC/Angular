import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CusromIfDirective } from './directives/cusrom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CusromIfDirective
  ],
  exports: [
    ErrorMsgDirective,
    CusromIfDirective
  ]
})
export class SharedModule { }
