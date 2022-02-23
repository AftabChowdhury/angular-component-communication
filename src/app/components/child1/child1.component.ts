import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PersonalInfo} from "../../models/personalInfo.model";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  @Input() personalInfo: PersonalInfo = {first_name: '', last_name: '', street: '', street_number: 0};
  @Output() personName = new EventEmitter();
  public message: string = 'Hello from Child1. Parent gets this message from Child1';

  emitPersonName() {
    this.personName.emit({full_name: this.personalInfo.first_name + ' ' + this.personalInfo.last_name});
  }

}
