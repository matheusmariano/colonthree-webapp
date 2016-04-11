import { Control } from 'angular2/common'

import { validateEmail } from './email/email.validator'

export module Validators {
    export var email = validateEmail
}
