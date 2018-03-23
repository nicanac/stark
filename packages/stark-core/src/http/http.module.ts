import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {StarkHttpServiceImpl, starkHttpServiceName} from "./service/index";

@NgModule({
	imports: [
		HttpClientModule
	],
	providers: [
		{provide: starkHttpServiceName, useClass: StarkHttpServiceImpl},
	]
})
export class StarkHttpModule {

}