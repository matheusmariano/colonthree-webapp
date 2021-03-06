import { Title } from 'angular2/platform/browser'
import { Component } from 'angular2/core'
import { OnActivate, Router } from 'angular2/router'

import { Navigable } from '../../../common/router/navigable'
import { RegisterFormComponent } from './register-form.component'

@Component({
    templateUrl: 'app/components/home/register/register.component.html',
    directives: [RegisterFormComponent],
    providers: [Title],
})
export class RegisterComponent implements OnActivate, Navigable {
    constructor(
        private _title: Title,
        private _router: Router
    ) {}

    routerOnActivate() {
        this._title.setTitle('Register - ColonThree')
    }

    navigate(params) {
        this._router.navigate(params)
    }
}
