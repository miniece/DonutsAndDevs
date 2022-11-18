import { Component, OnInit } from '@angular/core';
import { DevsService } from '../devs.service';
import { Devs, Complete } from '../devs';

@Component({
	selector: 'app-famous-people',
	templateUrl: './famous-people.component.html',
	styleUrls: [ './famous-people.component.css' ]
})
export class FamousPeopleComponent implements OnInit {
	people: Complete[] = {} as Complete[];

	constructor(private famousAPI: DevsService) {
		this.famousAPI.GetDevs().subscribe((result: Devs) => (this.people = result.complete));
	}

	ngOnInit(): void {}
}
