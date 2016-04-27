import { Title } from 'angular2/platform/browser'
import { Component } from 'angular2/core'
import { OnActivate, Router } from 'angular2/router'

import { Navigable } from '../../../common/router/navigable'
import { StorageService } from '../../../common/services/storage.service'
import { LoginFormComponent } from './login-form.component'

@Component({
    templateUrl: 'app/components/home/login/login.component.html',
    providers: [Title, StorageService],
    directives: [LoginFormComponent],
})
export class LoginComponent implements OnActivate, Navigable {
    alerts: { success?: string } = {}

    constructor(
        private _title: Title,
        private _router: Router,
        private _storageService: StorageService
    ) {}

    routerOnActivate() {
        this._title.setTitle('Login - ColonThree')

        if (this._storageService.session().get('userCreated')) {
            this.alerts.success = 'Registered successfully! Try to login now.'
        }
    }

    navigate(params) {
        this._router.navigate(params)
    }
}
