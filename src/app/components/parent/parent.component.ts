import {Component, OnInit} from '@angular/core';
import {PersonalInfo} from "../../models/personalInfo.model";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public personalInfo: PersonalInfo = {
    first_name: 'Aftab', last_name: 'Chowdhury', street: 'Alexender Strasse', street_number: 25
  };

  public fullName: string = '';
  public address: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public getPersonFullName($event: any){
    console.log('$event: ', $event);
    this.fullName = $event.full_name;
  }

  public getFullAddress($event: any){
    console.log('$event: ', $event);
    this.address = $event.address;
  }

}
