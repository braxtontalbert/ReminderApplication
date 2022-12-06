import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appReminder]'
})
export class ReminderDirective {

  constructor(public viewContainerRef: ViewContainerRef) {

    

   }

}
