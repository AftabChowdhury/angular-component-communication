import {Component, OnInit} from '@angular/core';
import {PersonalInfo} from "../../models/personalInfo.model";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public personalInfo: PersonalInfo = {
    first_name: 'Aftab', last_name: 'Chowdhury', address: 'Berlin, Germany', age: 25
  };

  constructor() { }

  ngOnInit(): void {
  }

}
