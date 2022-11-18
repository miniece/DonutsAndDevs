import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DevsService } from '../devs.service';
import { Complete, Devs } from '../devs';

@Component({
	selector: 'app-famous-person-detail',
	templateUrl: './famous-person-detail.component.html',
	styleUrls: [ './famous-person-detail.component.css' ]
})
export class FamousPersonDetailComponent implements OnInit {
	person: string = '';
	private routeSub: Subscription;
	constructor(private famousAPI: DevsService, private route: ActivatedRoute) {
		this.routeSub = route.params.subscribe((params) => {
			this.person = params[`id`];
		});
	}
	complete: Complete[] = {} as Complete[];
	compPerson: Complete = {} as Complete;
	ngOnInit(): void {
		this.famousAPI.GetDevs().subscribe((result: Devs) => (this.complete = result.complete));
		this.compPerson = this.complete[0];
	}
	ngOnDestroy() {
		this.routeSub.unsubscribe();
	}
}
