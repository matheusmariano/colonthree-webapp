import { Component } from 'angular2/core'
import { RouteConfig, RouterOutlet } from 'angular2/router'

import { IndexComponent } from './index/index.component'
import { CreateComponent } from './create/create.component'

@RouteConfig([
    {
        name: 'Index',
        path: '/',
        component: IndexComponent,
        useAsDefault: true,
    },
    {
        name: 'Create',
        path: 'create',
        component: CreateComponent,
    },
])
@Component({
    templateUrl: 'app/account/account.component.html',
    directives: [RouterOutlet],
})
export class AccountComponent {}
