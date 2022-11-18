import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { Donuts, Result } from '../donuts';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-donuts',
	templateUrl: './donuts.component.html',
	styleUrls: [ './donuts.component.css' ]
})
export class DonutsComponent implements OnInit {
	constructor(private donutsAPI: DonutsService) {}
	d: Donuts = {} as Donuts;

	ngOnInit(): void {
		this.donutsAPI.GetDonutsList().subscribe((result: Donuts) => (this.d = result));
	}
}
