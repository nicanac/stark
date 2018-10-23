import {
	DemoActionBarComponent,
	DemoBreadcrumbComponent,
	DemoButtonComponent,
	DemoDatePickerComponent,
	DemoDateRangePickerComponent,
	DemoDropdownComponent,
	DemoCardComponent,
	DemoCollapsibleComponent,
	DemoColorsComponent,
	DemoExampleViewerComponent,
	DemoFooterComponent,
	DemoHeaderComponent,
	DemoKeyboardDirectivesComponent,
	DemoLanguageSelectorComponent,
	DemoLogoutComponent,
	DemoMenuComponent,
	DemoPaginationComponent,
	DemoPrettyPrintComponent,
	DemoSidebarComponent,
	DemoSliderComponent,
	DemoTableComponent,
	DemoToastComponent,
	DemoTypographyComponent
} from "./demo";
import { HomeComponent } from "./home";
import { NoContentComponent } from "./no-content";
import { Ng2StateDeclaration } from "@uirouter/angular";
import { NewsComponent } from "./news";

export const APP_STATES: Ng2StateDeclaration[] = [
	{ name: "news", url: "/news", component: NewsComponent },
	{ name: "home", url: "/", component: HomeComponent },
	{ name: "demo-action-bar", url: "/demo/action-bar", component: DemoActionBarComponent },
	{ name: "demo-breadcrumb", url: "/demo/breadcrumb", component: DemoBreadcrumbComponent },
	{ name: "demo-button", url: "/demo/button", component: DemoButtonComponent },
	{ name: "demo-card", url: "/demo/card", component: DemoCardComponent },
	{ name: "demo-collapsible", url: "/demo/collapsible", component: DemoCollapsibleComponent },
	{ name: "demo-colors", url: "/demo/colors", component: DemoColorsComponent },
	{ name: "demo-date-picker", url: "/demo/date-picker", component: DemoDatePickerComponent },
	{ name: "demo-date-range-picker", url: "/demo/date-range-picker", component: DemoDateRangePickerComponent },
	{ name: "demo-dropdown", url: "/demo/dropdown", component: DemoDropdownComponent },
	{ name: "stark-footer", url: "/demo/stark-footer", component: DemoFooterComponent },
	{ name: "stark-header", url: "/demo/stark-header", component: DemoHeaderComponent },
	{ name: "demo-example-viewer", url: "/demo/example-viewer", component: DemoExampleViewerComponent },
	{ name: "demo-keyboard-directives", url: "/demo/keyboard-directives", component: DemoKeyboardDirectivesComponent },
	{ name: "demo-language-selector", url: "/demo/language-selector", component: DemoLanguageSelectorComponent },
	{ name: "demo-logout", url: "/demo/logout", component: DemoLogoutComponent },
	{ name: "demo-menu", url: "/demo/menu", component: DemoMenuComponent },
	{ name: "demo-pagination", url: "/demo/pagination", component: DemoPaginationComponent },
	{ name: "demo-pretty-print", url: "/demo/pretty-print", component: DemoPrettyPrintComponent },
	{ name: "demo-slider", url: "/demo/slider", component: DemoSliderComponent },
	{ name: "demo-sidebar", url: "/demo/sidebar", component: DemoSidebarComponent },
	{ name: "demo-table", url: "/demo/table", component: DemoTableComponent },
	{ name: "demo-toast", url: "/demo/toast", component: DemoToastComponent },
	{ name: "demo-typography", url: "/demo/typography", component: DemoTypographyComponent },
	{ name: "otherwise", url: "/otherwise", component: NoContentComponent }
];