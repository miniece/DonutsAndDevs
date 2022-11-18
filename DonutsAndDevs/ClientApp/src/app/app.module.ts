import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		HomeComponent,
		CounterComponent,
		FetchDataComponent,
		DonutDetailComponent,
		DonutsComponent,
		FamousPeopleComponent,
		FamousPersonDetailComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: 'donuts', component: DonutsComponent },
			{ path: 'donutsdetail/:id', component: DonutDetailComponent },
			{ path: 'famouspeople', component: FamousPeopleComponent },
			{ path: 'famouspersondetail', component: FamousPersonDetailComponent }
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
