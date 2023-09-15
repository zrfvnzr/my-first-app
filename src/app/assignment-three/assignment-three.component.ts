import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assignment-three',
    templateUrl: './assignment-three.component.html',
    styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {

    isShown = true;
	logs = [];

    constructor() { }

    ngOnInit(): void {
    }

	toggleShownAndLog(): void {
		this.isShown = !this.isShown;
		this.logs.push(this.logs.length+1);
	}

}
