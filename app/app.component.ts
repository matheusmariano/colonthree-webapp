import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http'

import { AccountComponent } from './account/account.component'

@RouteConfig([
    {
        name: 'Account',
        path: '...',
        component: AccountComponent,
        useAsDefault: true,
    },
])
@Component({
    selector: 'ct-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
})
export class AppComponent {}
