import { Title } from 'angular2/platform/browser'
import { Component } from 'angular2/core'
import { OnActivate } from 'angular2/router'

import { RegisterFormComponent } from './register-form.component'

@Component({
    templateUrl: 'app/components/home/register/register.component.html',
    directives: [RegisterFormComponent],
    providers: [Title],
})
export class RegisterComponent implements OnActivate {
    constructor(
        private _title: Title
    ) {}

    routerOnActivate() {
        this._title.setTitle('Register - ColonThree')
    }
}
