import { Component } from '@angular/core';
import { HTTPTestService } from './services/http-test.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HTTPTestService]

})
export class AppComponent implements OnInit{

    title = 'app';
    postData: string;
    constructor(private _httpService: HTTPTestService){}
    onTestPost(){
		this._httpService.postJSON(
			'http://validate.jsontest.com',
			{var1: 'test', var2: 2},
			{'Content-Type': 'application/x-www-form-urlencoded'}
		).subscribe(data => this.postData = JSON.stringify(data),error => alert(error),() => console.log("Finished"));
    }
    ngOnInit() {
	this.onTestPost();
    }
    

}
