import { Injectable } from '@angular/core';
import { Http } from '@angular/http';		
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Request {
	
	constructor(public http: Http)
	{
	
	}

	get(url): Promise<any>
	{
		return this.http.get('http://www.zipcodeapi.com/rest/ac6HfXoxA0CeIuaf8FhMBzDtWP6rWzh6MnO1kcyVdbaWGkbOZtBA3e3Z4aq0KI7w/info.json/07750/radians').map(response => {
			return response.json() || {success: false, message: "No response from server"};
		}).catch((error: Response | any) => {
			return Observable.throw(error.json());
		}).toPromise();
	}

	post(url, data): Promise<any>
	{
		return this.http.post('http://www.zipcodeapi.com/rest/ac6HfXoxA0CeIuaf8FhMBzDtWP6rWzh6MnO1kcyVdbaWGkbOZtBA3e3Z4aq0KI7w/info.json/07750/radians', data).map(response => {
			return response.json() || {success: false, message: "No response from server"};
		}).catch((error: Response | any) => {
			return Observable.throw(error.json());
		}).toPromise();
	}
}