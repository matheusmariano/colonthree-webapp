import { Component } from 'angular2/core'

import { CreateFormComponent } from './create-form.component'

@Component({
    templateUrl: 'app/account/create/create.component.html',
    directives: [CreateFormComponent],
})
export class CreateComponent {}
