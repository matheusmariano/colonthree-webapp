import { Component, OnInit } from 'angular2/core'
import { ControlGroup, FormBuilder, Validators } from 'angular2/common'

import { Validators as CtValidators } from '../../../common/validators/validators'
import { User } from '../../../services/user/user'

@Component({
    selector: 'ct-login-form',
    templateUrl: 'app/components/home/login/login-form.component.html',
})
export class LoginFormComponent implements OnInit {
    form: ControlGroup
    model: User

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this._initModel()
        this._applyValidators()
    }

    private _initModel() {
        this.model = new User()
        this.model.email = ''
        this.model.password = ''
    }

    private _applyValidators() {
        this.form = this._formBuilder.group({
            email: [this.model.email, Validators.compose([
                Validators.required,
                Validators.maxLength(255),
                CtValidators.email,
            ])],
            password: [this.model.password, Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(255),
            ])],
        })
    }
}
