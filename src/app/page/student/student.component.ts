import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private userName : string = "Student";
  private point : string = "30";
  private GET_TOKEN : string = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DC2G&redirect_uri=http%3A%2F%2Flocalhost&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800sss";

  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('token')) {
        alert('welcome');
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
}
