import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 startDate;
 endDate: Date = new Date();
 days: number;


  addDays(){
    console.log(this.startDate.day)
    this.endDate.setDate(this.startDate.day + this.days);

    console.log(this.endDate);
  }
}
