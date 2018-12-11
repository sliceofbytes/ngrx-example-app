import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-timeago',
  templateUrl: 'ago-formatter.html'
})
export class AgoFormatterComponent {
  public _time = new BehaviorSubject<Date>(null);

  @Input()
  set time(value: Date) {
    console.log('Setting value')
    this._time.next(value);
  }

  get time() {
    return this._time.getValue();
  }
}
