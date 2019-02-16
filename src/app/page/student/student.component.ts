import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [
    CommonService
  ]
})
export class StudentComponent implements OnInit {

  private history : string = "";
  private isSubmited : boolean = false;
  private isLoading : boolean = true;
  private showLastDate : boolean = true;
  private showHistory : boolean = false;
  private userName : string = "";
  private point : number = 0;
  private lastDate : string = this.getLastDate();
  private startTime : string = "-";
  private endTime : string = "-";
  private sleepDuration : string = "-";
  private caloriesOut : string = "-";
  private activeMinutes : string = "-";
  private steps : string = "-";
  private GET_TOKEN : string = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DC2G&redirect_uri=http%3A%2F%2Flocalhost&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800sss";


  constructor(private commonService: CommonService) { }

  ngOnInit() {
    if (window.localStorage.getItem('token')) {

        // Product
        /*this.commonService.getProfile().then(
          (res: any) => {
            this.userName = res.user.displayName;
          }
        )
        this.commonService.getSleepLog(this.lastDate).then(
          (res: any) => {
            this.startTime = res.sleep[0].startTime;
            this.endTime = res.sleep[0].endTime;
            this.sleepDuration = res.sleep[0].timeInBed;
          }
        )
        this.commonService.getActivitiesLog(this.lastDate).then(
          (res: any) => {
            console.log(res.summary);
            this.caloriesOut = res.summary.caloriesOut;
            this.activeMinutes = res.summary.fairlyActiveMinutes;
            this.steps = res.summary.steps;
            this.isLoading = false;
          }
        )*/

        // Development
        this.userName = "KS";
        this.startTime = "2017-04-01T23:58:30.000";
        this.endTime = "2017-04-01T23:58:30.000";
        this.sleepDuration = "200";
        this.caloriesOut = "2000";
        this.activeMinutes = "30";
        this.steps = "2000";
        this.isLoading = false;
        this.commonService.getTransaction({}).then(
          (res: any) => {
            this.history = JSON.stringify(res);
          }
        )
    } else {
      if(window.location.hash) {
        let hash = window.location.hash.split('&');
        let filtered = hash.find(function(element, index, array) {
          return (element.indexOf('access_token') != -1);
        });
        if (filtered) { 
          window.localStorage.setItem('token', filtered.split('=')[1]);
          window.location.href = "/";
        } else {
          window.location.href = this.GET_TOKEN;
        }
      } else {
        window.location.href = this.GET_TOKEN;
      }
    }
  }
  getLastDate() {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    let year  = date.getFullYear();
    let month = date.getMonth() + 1;
    let day   = date.getDate();
    return String(year) + "-" + String(month) + "-" + String(day);
  }
  submit() {
    this.commonService.submit({
      name: this.userName,
      date: this.lastDate,
      start: this.startTime,
      end: this.endTime,
      duration: this.sleepDuration,
      calory: this.caloriesOut,
      active: this.activeMinutes,
      steps: this.steps
    }).then(
      (res: any) => {
        if (res.message == "SUCCESS") {
          console.log(res);
          this.isSubmited = true;
        }
      }
    )
  }
  selectLastDate() {
    this.showLastDate = true;
    this.showHistory = false;
  }
  selectHistory() {
    this.showLastDate = false;
    this.showHistory = true;
  }
}
