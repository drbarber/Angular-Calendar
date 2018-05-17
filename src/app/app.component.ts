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
  calendarMonths: any[];
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
    this.listMonths();
    

  }

  listMonths(){
    this.calendarMonths = [];

    for(var i:number = this.startDate.month; i <= this.endDate.month; i++){
      
      this.listDays();
      this.calendarMonths.push({month : this.months[i - 1], cDays: this.calendarDays})
    }
  }

  listDays(){
    var startWeekday  = (this.fullStartDate.getDay() + 4) % 7;
    this.calendarDays = [];
    
    for (var i = 0; i < startWeekday; i++){
      this.calendarDays.push({day: "  ", css: 'Invalid' });
    }
   for (var i:number = this.startDate.day; !this.isLastDayOfMonth(i, (startWeekday % 7)) && i <= (this.startDate.day + this.days); i++){
     this.calendarDays.push({css:  (startWeekday % 7) == 6||(startWeekday % 7) == 0 ? "Weekend": "Weekday", day: i });
     startWeekday++;
   }
  }

  isLastDayOfMonth(day:number, weekday:number):boolean{
    if(day == new Date(this.startDate.year, this.startDate.month, 0).getDate()){
      this.calendarDays.push({css: weekday == 6 || weekday == 0 ? "Weekend" : "Weekday", day: day})
      this.days -= (day - this.startDate.day); 
      this.startDate.month++
      this.startDate.day = 1;

      this.fullStartDate.setMonth(this.startDate.month)
      this.fullStartDate.setDate(this.startDate.day)
      
      return true;
    }
    else {
      
      return false;
    }


  }
 
}
