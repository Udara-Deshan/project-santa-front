import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {ApiLoadingService} from "./api-loading/api-loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CUSL_ProjectSanta';
  constructor(router: Router,
              public apiLoadingService: ApiLoadingService) {
    router.canceledNavigationResolution = 'computed';

    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

}
