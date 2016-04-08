import { Component, OnInit } from 'angular2/core'
import { ControlGroup, FormBuilder, Validators } from 'angular2/common'

@Component({
    selector: 'ct-create-form',
    templateUrl: 'app/account/create/create-form.component.html',
})
export class CreateFormComponent implements OnInit {
    form: ControlGroup

    constructor(private _formBuilder: FormBuilder) {}

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
                Validators.maxLength(60),
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(255),
            ])],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(255),
            ])],
        })
    }
}
