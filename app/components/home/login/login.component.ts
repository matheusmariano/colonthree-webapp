import { Title } from 'angular2/platform/browser'
import { Component } from 'angular2/core'
import { OnActivate, Router } from 'angular2/router'

import { Navigable } from '../../../common/router/navigable'
import { SessionService } from '../../../common/services/session.service'
import { LoginFormComponent } from './login-form.component'

@Component({
    templateUrl: 'app/components/home/login/login.component.html',
    providers: [Title, SessionService],
    directives: [LoginFormComponent],
})
export class LoginComponent implements OnActivate, Navigable {
    alerts: { success?: string } = {}

    constructor(
        private _title: Title,
        private _router: Router,
        private _sessionService: SessionService
    ) {}

    routerOnActivate() {
        this._title.setTitle('Login - ColonThree')

        if (this._sessionService.get('userCreated')) {
            this.alerts.success = 'Registered successfully! Try to login now.'
        }
    }

    navigate(params) {
        this._router.navigate(params)
    }
}
