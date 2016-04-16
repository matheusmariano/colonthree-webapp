import { Title } from 'angular2/platform/browser'
import { Component } from 'angular2/core'
import { OnActivate, Router } from 'angular2/router'

import { Navigable } from '../../../common/router/navigable'
import { LoginFormComponent } from './login-form.component'

@Component({
    templateUrl: 'app/components/home/login/login.component.html',
    providers: [Title],
    directives: [LoginFormComponent],
})
export class LoginComponent implements OnActivate, Navigable {
    constructor(
        private _title: Title,
        private _router: Router
    ) {}

    routerOnActivate() {
        this._title.setTitle('Login - ColonThree')
    }

    navigate(params) {
        this._router.navigate(params)
    }
}
