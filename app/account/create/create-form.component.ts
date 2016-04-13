import { Component, OnInit } from 'angular2/core'
import { ControlGroup, FormBuilder, Validators } from 'angular2/common'

import { Validators as CtValidators } from '../../core/validators/validators'
import { UsernameService } from '../username.service'
import { EmailService } from '../email.service'

@Component({
    selector: 'ct-create-form',
    templateUrl: 'app/account/create/create-form.component.html',
    providers: [UsernameService, EmailService],
})
export class CreateFormComponent implements OnInit {
    form: ControlGroup

    constructor(
        private _formBuilder: FormBuilder,
        private _usernameService: UsernameService,
        private _emailService: EmailService
    ) {}

    ngOnInit() {
        this.applyValidators()
    }

    applyValidators(): void {
        this.form = this._formBuilder.group({
            name: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(255),
            ])],
            username: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
                Validators.pattern('[A-Za-z0-9-_]+'),
            ]), CtValidators.unique(this._usernameService)],
            email: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(255),
                CtValidators.email,
            ]), CtValidators.unique(this._emailService)],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(255),
            ])],
        })
    }
}
