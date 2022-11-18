import { Component, OnInit } from '@angular/core';
import { DonutsService } from '../donuts.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Donuts } from '../donuts';

@Component({
	selector: 'app-donut-detail',
	templateUrl: './donut-detail.component.html',
	styleUrls: [ './donut-detail.component.css' ]
})
export class DonutDetailComponent implements OnInit {
	dId: number = -1;
	private routeSub: Subscription;

	constructor(private donutsAPI: DonutsService, private route: ActivatedRoute) {
		this.routeSub = route.params.subscribe((params) => {
			this.dId = params['id'];
		});
	}

	thisD: Donuts = {} as Donuts;

	ngOnInit(): void {
		this.donutsAPI.GetDonutsDetail(this.dId).subscribe();
	}
}
