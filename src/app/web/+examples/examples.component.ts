import { Component } from '@angular/core';

import { MENU_ITEMS } from './examples-menu';

@Component({
  selector: 'ngx-examples',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class ExamplesComponent {

  menu = MENU_ITEMS;
}
