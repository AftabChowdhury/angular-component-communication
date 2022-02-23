import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PersonalInfo} from "../../models/personalInfo.model";
import {Child1Component} from "../child1/child1.component";
import {Child2Component} from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
  public personalInfo: PersonalInfo = {
    first_name: 'Aftab', last_name: 'Chowdhury', street: 'Alexender Strasse', street_number: 25
  };

  public messageChild1: string = '';
  public messageChild2: string = '';
  public fullName: string = '';
  public address: string = '';
  @ViewChild(Child1Component) child1: any;
  @ViewChild(Child2Component) child2: any;

  ngAfterViewInit() {
    console.log('this.child1.message', this.child1.message);
    Promise.resolve().then(() => this.messageChild1 = this.child1.message);
    setTimeout(() => {
      this.messageChild2 = this.child2.message
    }, 0);
  }

  public getPersonFullName($event: any) {
    this.fullName = $event.full_name;
  }

  public getFullAddress($event: any) {
    this.address = $event.address;
  }

}
