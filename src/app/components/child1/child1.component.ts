import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonalInfo} from "../../models/personalInfo.model";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() personalInfo: PersonalInfo = {first_name: '', last_name: '', street: '', street_number: 0};
  @Output() personName = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitPersonName() {
    this.personName.emit({full_name: this.personalInfo.first_name + ' ' + this.personalInfo.last_name});
  }

}
