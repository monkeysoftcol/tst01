import {Component, OnInit} from '@angular/core';

@Component({
	selector:'error-page',
	templateUrl:'./error.html'
})
export class ErrorComponent implements OnInit{


	constructor(){
	}

	ngOnInit(){
		console.log("ErrorComponent cargado!!!");
	}


}
