import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Devs } from './devs';

@Injectable({
	providedIn: 'root'
})
export class DevsService {
	constructor(private http: HttpClient) {}

	GetDevs(): Observable<Devs> {
		let url: string = `http://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json`;
		console.log(url);
		return this.http.get<Devs>(url);
	}
}
