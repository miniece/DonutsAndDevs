import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Donuts } from './donuts';
import { DonutsComponent } from './donuts/donuts.component';

@Injectable({
	providedIn: 'root'
})
export class DonutsService {
	constructor(private http: HttpClient) {}

	GetDonutsList(): Observable<Donuts> {
		let url: string = `https://grandcircusco.github.io/demo-apis/donuts.json`;
		console.log(url);
		return this.http.get<Donuts>(url);
	}
	GetDonutsDetail(id: number): Observable<DonutsComponent> {
		let url: string = `https://grandcircusco.github.io/demo-apis/donuts/${id}.json`;
		console.log(url);
		return this.http.get<DonutsComponent>(url);
	}
}
