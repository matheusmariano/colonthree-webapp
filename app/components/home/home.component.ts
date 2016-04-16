import { Component } from 'angular2/core'
import { RouteConfig, RouterOutlet } from 'angular2/router'

import { IndexComponent } from './index/index.component'
import { RegisterComponent } from './register/register.component'

@RouteConfig([
    {
        name: 'Index',
        path: '/',
        component: IndexComponent,
        useAsDefault: true,
    },
    {
        name: 'Register',
        path: 'register',
        component: RegisterComponent,
    },
])
@Component({
    templateUrl: 'app/components/home/home.component.html',
    directives: [RouterOutlet],
})
export class HomeComponent {}
