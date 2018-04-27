import { Component } from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap'; // Import ng-bootstrap datepicker dependency

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDatepickerConfig]
})
export class AppComponent {
  title = 'app';

  // Set min-max date for ng-bootstrap datepicker
  constructor(config: NgbDatepickerConfig) {
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = { year: 2099, month: 12, day: 31 };
  }
}
