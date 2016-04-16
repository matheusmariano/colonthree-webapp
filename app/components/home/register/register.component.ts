import { Component } from 'angular2/core'

import { RegisterFormComponent } from './register-form.component'

@Component({
    templateUrl: 'app/components/home/register/register.component.html',
    directives: [RegisterFormComponent],
})
export class RegisterComponent {}
