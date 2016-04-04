import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'

import { IndexComponent } from './index/index.component'

@RouteConfig([
    {
        name: 'Index',
        path: '/',
        component: IndexComponent,
    }
])
@Component({
    selector: 'ct-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})
export class AppComponent {}
