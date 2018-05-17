import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 startDate;
 endDate;
 fullEndDate: Date = new Date();
 fullStartDate: Date = new Date();
 days: number;

  months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  daysOfWeek = ["Su","Mo","Tu","We","Th","Fr","Sa"];
  calendarDays: any[];

   addDays(){

    this.fullEndDate.setFullYear(this.startDate.year);
    this.fullEndDate.setMonth(this.startDate.month);
    this.fullEndDate.setDate(this.startDate.day + this.days);
    this.fullStartDate.setFullYear(this.startDate.year);
    this.fullStartDate.setMonth(this.startDate.month);
    this.fullStartDate.setDate(this.startDate.day);

    this.endDate = {year: this.fullEndDate.getFullYear(), month: this.fullEndDate.getMonth(), day: this.fullEndDate.getDate()};

    this.generateCalendar();
  }


  generateCalendar(){
    var startWeekday  = (this.fullStartDate.getDay() + 4) % 7;
    this.calendarDays = [];
    
    for (var i = 0; i < startWeekday; i++){
      this.calendarDays.push({valid: "no", dayType:  i == 6||i == 0 ? "Weekend": "Weekday" });
    }


    console.log(startWeekday);
  }
 
}
