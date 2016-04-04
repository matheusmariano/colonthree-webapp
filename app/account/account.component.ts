import { Component } from 'angular2/core'
import { RouteConfig, RouterOutlet } from 'angular2/router'

import { IndexComponent } from './index/index.component'

@RouteConfig([
    {
        name: 'AccountIndex',
        path: '/',
        component: IndexComponent
    }
])
@Component({
    templateUrl: 'app/account/account.component.html',
    directives: [RouterOutlet]
})
export class AccountComponent {}
