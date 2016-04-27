import { Component, OnInit } from 'angular2/core'
import { ControlGroup, FormBuilder, Validators } from 'angular2/common'
import { Router } from 'angular2/router'

import { Validators as CtValidators } from '../../../common/validators/validators'
import { SessionService } from '../../../common/services/session.service'
import { UserService } from '../../../services/user/user.service'
import { UsernameService } from '../../../services/user/username.service'
import { EmailService } from '../../../services/user/email.service'
import { User } from '../../../services/user/user'

@Component({
    selector: 'ct-register-form',
    templateUrl: 'app/components/home/register/register-form.component.html',
    providers: [SessionService, UserService, UsernameService, EmailService],
})
export class RegisterFormComponent implements OnInit {
    form: ControlGroup
    model: User
    register: { error: boolean, pending: boolean } = {
        error: false,
        pending: false,
    }

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _sessionService: SessionService,
        private _userService: UserService,
        private _usernameService: UsernameService,
        private _emailService: EmailService
    ) {}

    ngOnInit() {
        this._initModel()
        this._applyValidators()
    }

    submit(): void {
        this.register.pending = true

        this._userService
            .store(this.model)
            .subscribe((response) => {
                this._sessionService.flash('userCreated', true)
                this._router.navigate(['Login'])
            }, (error) => {
                this.register.pending = false
                this.register.error = true
            })
    }

    private _initModel(): void {
        this.model = new User()
        this.model.name = ''
        this.model.username = ''
        this.model.email = ''
        this.model.password = ''
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
