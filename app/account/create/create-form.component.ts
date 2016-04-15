import { Component, OnInit } from 'angular2/core'
import { ControlGroup, FormBuilder, Validators } from 'angular2/common'
import { Router } from 'angular2/router'

import { Validators as CtValidators } from '../../core/validators/validators'
import { AccountService } from '../account.service'
import { UsernameService } from '../username.service'
import { EmailService } from '../email.service'
import { CreateForm } from './create-form'

@Component({
    selector: 'ct-create-form',
    templateUrl: 'app/account/create/create-form.component.html',
    providers: [AccountService, UsernameService, EmailService],
})
export class CreateFormComponent implements OnInit {
    form: ControlGroup
    model: CreateForm

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _accountService: AccountService,
        private _usernameService: UsernameService,
        private _emailService: EmailService
    ) {}

    ngOnInit() {
        this._initModel()
        this._applyValidators()
    }

    submit(): void {
        this._accountService
            .store(this.model)
            .subscribe((response) => {
                this._router.navigate(['Index'])
            })
    }

    private _initModel(): void {
        this.model = {
            name: '',
            username: '',
            email: '',
            password: '',
        }
    }

    private _applyValidators(): void {
        this.form = this._formBuilder.group({
            name: [this.model.name, Validators.compose([
                Validators.required,
                Validators.maxLength(255),
            ])],
            username: [this.model.username, Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
                Validators.pattern('[A-Za-z0-9-_]+'),
            ]), CtValidators.unique(this._usernameService)],
            email: [this.model.email, Validators.compose([
                Validators.required,
                Validators.maxLength(255),
                CtValidators.email,
            ]), CtValidators.unique(this._emailService)],
            password: [this.model.password, Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(255),
            ])],
        })
    }
}
