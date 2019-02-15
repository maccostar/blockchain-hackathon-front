import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private FITBIT_HOST: string = 'https://api.fitbit.com/1/user/-';
  private SUBMIT_HOST: string = 'http://localhost:3000/submit';
  private GET_HOST: string = 'http://localhost:3001/get';

  constructor(private http: HttpClient) { }

  public getProfile(): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.FITBIT_HOST + '/profile.json', httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  public getSleepLog(date: any): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.FITBIT_HOST + `/sleep/date/${date}.json`, httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  public getActivitiesLog(date: any): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.FITBIT_HOST + `/activities/date/${date}.json`, httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  public submit (param: any): Promise<any[]> {
    return this.http.post<any>(this.SUBMIT_HOST, param)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  public getTransaction (param: any): Promise<any[]> {
    return this.http.get(this.GET_HOST)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    if (err.status == 401) {
      window.localStorage.removeItem('token');
      window.location.reload;
    }
    if (err.status == 429) {
      // Many Request ...
    }
    return Promise.reject(err.message || err);
  }
}
