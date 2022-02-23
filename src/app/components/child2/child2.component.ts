import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonalInfo} from "../../models/personalInfo.model";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
  @Input() personalInfo: PersonalInfo = {first_name: '', last_name: '', street: '', street_number: 0};
  @Output() address = new EventEmitter();
  public message: string = 'Hello, from Child2 component. Parent get this message from Child 2';

  emitAddress() {
    this.address.emit({address: this.personalInfo.street + ' ' + this.personalInfo.street_number});
  }

}
